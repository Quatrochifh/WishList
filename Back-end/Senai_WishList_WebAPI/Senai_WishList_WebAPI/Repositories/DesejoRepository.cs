using Senai_WishList_WebAPI.Contexts;
using Senai_WishList_WebAPI.Domains;
using Senai_WishList_WebAPI.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai_WishList_WebAPI.Repositories
{
    public class DesejoRepository : IDesejoRepository
    {
        Wishlistcontext ctx = new Wishlistcontext();

        public Desejo BuscarPorId(int id)
        {
            return ctx.Desejos.FirstOrDefault(d => d.IdDesejo == id);
            
        }

        public void Cadastrar(Desejo novoDesejo)
        {
            novoDesejo.DataDesejo = DateTime.Now;
            ctx.Desejos.Add(novoDesejo);

            ctx.SaveChanges();
        }

        public void Deletar(int id)
        {
            ctx.Desejos.Remove(BuscarPorId(id));
            ctx.SaveChanges();
        }

        public List<Desejo> Listar()
        {
            return ctx.Desejos.ToList();
        }

    }
}
