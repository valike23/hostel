using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using Hostel_allocation;

namespace Hostel_allocation.Controllers
{
    public class RecieptsController : ApiController
    {
        private hostelEntities2 db = new hostelEntities2();

        // GET: api/Reciepts
        public IQueryable<Reciept> GetReciept()
        {
            return db.Reciept;
        }

        // GET: api/Reciepts/5
        [ResponseType(typeof(Reciept))]
        public IQueryable<Reciept> GetReciept(int id)
        {
            var reciept = db.Reciept.Where(e => e.Payer == id);
            //if (reciept == null)
            //{
              
            //}

            return reciept;
        }

        // PUT: api/Reciepts/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutReciept(int id, Reciept reciept)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != reciept.Id)
            {
                return BadRequest();
            }

            db.Entry(reciept).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RecieptExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Reciepts
        [ResponseType(typeof(Reciept))]
        public IHttpActionResult PostReciept(Reciept reciept)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Reciept.Add(reciept);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = reciept.Id }, reciept);
        }

        // DELETE: api/Reciepts/5
        [ResponseType(typeof(Reciept))]
        public IHttpActionResult DeleteReciept(int id)
        {
            Reciept reciept = db.Reciept.Find(id);
            if (reciept == null)
            {
                return NotFound();
            }

            db.Reciept.Remove(reciept);
            db.SaveChanges();

            return Ok(reciept);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool RecieptExists(int id)
        {
            return db.Reciept.Count(e => e.Id == id) > 0;
        }
    }
}