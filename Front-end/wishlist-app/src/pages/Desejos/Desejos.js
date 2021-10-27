import { Component } from "react";
import logo from '../../assests/wishlist_branco 1.png'


export default class Desejos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listaDesejos: [],
            idUsuario: '',
            titulo: '',
            descricao: '',


        }
    }

    buscarDesejo = () => {
        console.log("Bem vindo a just wish! Cadastre seu desejos e veja a lista de desejos")

        fetch('http://localhost:5000/api/desejo')

            .then(resposta => resposta.json())

            .then(desejos => this.setState({ listaDesejos: desejos }))

            .catch(erro => console.log(erro))
    }

    componentDidMount() {
        this.buscarDesejo();
    }

    atualizarTitulo = async (desejo) => {
        await this.setState({ titulo: desejo.target.value })
        console.log(this.state.titulo)
    }
    atualizaridUsuario = async (desejo) => {
        await this.setState({ idUsuario: desejo.target.value })
        console.log(this.state.idUsuario)
    }
    atualizarDescricao = async (desejo) => {
        await this.setState({ descricao: desejo.target.value })
        console.log(this.state.descricao)
    }

    cadastrarDesejo = () => {
        fetch('http://localhost:5000/api/desejo', {
            method: 'POST',

            body: JSON.stringify({ idUsuario: this.state.idUsuario, titulo: this.state.titulo, descricao: this.state.descricao }),

            headers: { "Content-Type": "application/json" }

        })

            .then(console.log("Desejo cadastrado com sucesso!"))
            .catch(erro => console.log(erro))
            .then(this.limparCampos)
            .then(this.buscarDesejo)


    }

    excluirDesejo = (desejos) => {
        console.log("O desejo " + desejos.idDesejo + "foi selecionado")

        fetch('http://localhost:5000/api/desejo/deletar/' + desejos.idDesejo, {
            method: 'DELETE'
        })
            .then(resposta => {
                if (resposta.status === 204) {
                    // deu certo
                    console.log('O desejo ' + desejos.idDesejo + ' foi excluído!')

                }
            })
            .catch(erro => console.log(erro))

            .then(this.buscarDesejo);

    }

    limparCampos = () => {
        this.setState({
            idUsuario: '',
            titulo: '',
            descricao: ''
        })
        console.log('Os campos foram resetados')
    }
   

    render() {
        return (
            //JSX
            <div className='div_cor'>
                <header className='header_cadastrar container'>
                    <div>
                        <a href="/">
                            <img className='logo_cadastrar' src={logo} ></img>
                        </a>
                    </div>

                </header>
                <main className='container'>
                    <section>
                        <div>
                            <form className='form_cadastrar'>
                                <h2>Cadastro de desejos!</h2>
                                <input type='text'
                                    value={this.state.idUsuario}
                                    placeholder='Digite aqui o ID do usuario...'
                                    required
                                    onChange={this.atualizaridUsuario}

                                ></input>
                                <input type='text'
                                    value={this.state.titulo}
                                    placeholder='Digite aqui o que você deseja...'
                                    required
                                    onChange={this.atualizarTitulo}

                                ></input>
                                <input type='text'
                                    value={this.state.descricao}
                                    placeholder='Descreva seu desejo...'
                                    required
                                    onChange={this.atualizarDescricao}
                                ></input>

                                <button type='submit' onClick={() => this.cadastrarDesejo()}
                                disabled={this.state.titulo === '' ? 'none' : '' || this.state.descricao === ''? 'none': '' || this.state.idUsuario === ''? 'none': ''}
                                
                                >Cruze os dedos e cadastre</button>
                            </form>
                        </div>
                    </section>
                    <section>
                        <div className='form_listar'>

                            <h2>Seus desejos</h2>
                            <table className='org_table'>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Desejo</th>
                                        <th>Descrição</th>
                                        <th>Data de Criação</th>


                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.listaDesejos.map((desejos) => {
                                            return (

                                                <tr key={desejos.idDesejo}>
                                                    <td>{desejos.idDesejo}</td>
                                                    <td>{desejos.titulo}</td>
                                                    <td>{desejos.descricao}</td>
                                                    <td>{desejos.dataDesejo}</td>
                                                    <button type='submit' className='bnt_excluir' onClick={() => this.excluirDesejo(desejos)}>X</button>
                                                </tr>
                                            )

                                        })
                                    }
                                </tbody>
                            </table>

                        </div>
                    </section>
                </main>
            </div>
        )
    }
}