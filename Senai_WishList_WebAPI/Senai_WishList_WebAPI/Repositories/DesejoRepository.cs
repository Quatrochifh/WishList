using Senai_WishList_WebAPI.Contexts;
using Senai_WishList_WebAPI.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai_WishList_WebAPI.Repositories
{
    public class DesejoRepository
    {
        Wishlistcontext ctx = new Wishlistcontext();

        public void Cadastrar(Desejo novoDesejo)
        {
            ctx.Desejos.Add(novoDesejo);

            ctx.SaveChanges();
        }

        public List<Desejo> Listar()
        {
            return ctx.Desejos.ToList();
        }

    }
}
