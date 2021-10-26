using Senai_WishList_WebAPI.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai_WishList_WebAPI.Interfaces
{
    interface IDesejoRepository
    {
        List<Desejo> Listar();

        Desejo BuscarPorId(int id);

        void Cadastrar(Desejo novoDesejo);
    }
}
