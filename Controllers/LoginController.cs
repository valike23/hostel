using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using Hostel_allocation.Models;

namespace Hostel_allocation.Controllers
{
    public class LoginController : ApiController
    {
        private hostelEntities2 db = new hostelEntities2();

        public User Post(UserDetails user)
        {
            var person = db.Users.First(e => e.Mat_No == user.Matno && e.Password == user.Password);
           
            return person;
        }

        public int  put([FromUri]int id)
        {
            try
            { db.Users.First(e => e.Id == id).Apply = true;
                db.SaveChanges();
                return 1;
            }
            catch 
            {
                return 0;
            }
        }
    }
}
