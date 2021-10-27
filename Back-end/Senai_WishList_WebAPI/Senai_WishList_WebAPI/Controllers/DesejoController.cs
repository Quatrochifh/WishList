using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Senai_WishList_WebAPI.Domains;
using Senai_WishList_WebAPI.Repositories;

namespace Senai_WishList_WebAPI.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class DesejoController : ControllerBase
    {
        private DesejoRepository _DesejoRepository { get; set; }

        public DesejoController()
        {
            _DesejoRepository = new DesejoRepository();
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_DesejoRepository.Listar());
        }

        [HttpPost]
        public IActionResult Post(Desejo novoDesejo)
        {
            _DesejoRepository.Cadastrar(novoDesejo);

            return StatusCode(201);
        }

        [HttpGet("{id}")]
        public IActionResult BuscarPorId(int id)
        {
            Desejo listaDesejos =_DesejoRepository.BuscarPorId(id);

            return Ok(listaDesejos);
        }

        [HttpDelete("deletar/{id}")]
        public IActionResult Deletar(int id)
        {
            _DesejoRepository.Deletar(id);
            return StatusCode(204);
        }
    }
}
