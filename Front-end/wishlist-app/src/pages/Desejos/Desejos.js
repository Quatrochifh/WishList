import { Component } from "react";
import logo from '../../assests/wishlist_branco 1.png'


export default class Desejos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listaDesejos: [],
            titulo: '',
            descricao: ''

        }
    }

    render() {
        return (
            //JSX
            <div className='div_cor'>
                <header className='header_cadastrar container'>
                    <div>
                        <img className='logo_cadastrar' src={logo}></img>
                    </div>

                </header>
                <main className='container'>
                    <section>
                        <div>
                            <form className='form_cadastrar'>
                                <h2>Cadastro de desejos!</h2>
                                <input type='text'
                                    placeholder='Digite aqui o que você deseja...'

                                ></input>
                                <input type='text'
                                    placeholder='Descreva seu desejo...'

                                ></input>

                                <button type='submit'>Cruze os dedos e cadastre</button>
                            </form>
                        </div>
                    </section>
                    <section>
                        <div className='form_listar'>

                            <h2>Seus desejos</h2>
                            <table className ='org_table'>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Desejo</th>
                                        <th>Descrição</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1232</td>
                                        <td>ter uma magrela</td>
                                        <td>R1200 a mais braba</td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </section>
                </main>
            </div>
        )
    }
}