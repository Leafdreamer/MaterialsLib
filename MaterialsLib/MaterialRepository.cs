using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MaterialsLib
{
    public class MaterialRepository
    {
        private List<Material> materialList;

        private int nextID;

        public MaterialRepository()
        {
            materialList = new List<Material>();

            List<string> l1 = new List<string>();
            List<string> l2 = new List<string>();

            l2.Add("test");

            Material m1 = new Material(1, "Steel Bar", "Metal", l1, 2, "", DateTime.Now, DateTime.Now);
            Material m2 = new Material(2, "Steel Screw", "Metal", l2, 8, "", DateTime.Now, DateTime.Now);

            materialList.Add(m1);
            materialList.Add(m2);

            nextID = 3;
        }

        public List<Material> GetAll()
        {
            return new List<Material>(materialList);
        }

        public Material? GetById(int id)
        {
            return materialList.FirstOrDefault(x => x.Id == id);
        }

        public Material Add(Material material)
        {
            material.ValidateAmount();
            material.ValidateDateTime();

            material.Id = nextID;
            nextID++;

            materialList.Add(material);
            return material;
        }

        public Material? Delete(int id)
        {
            Material? tbd = GetById(id);

            if (tbd != null)
                materialList.Remove(tbd);

            return tbd;
        }

        public Material? Update(int id, Material material)
        {
            Material? tbu = GetById(id);

            if (tbu != null)
            {
                tbu.Name = material.Name;
                tbu.Type = material.Type;
                tbu.Tags = material.Tags;
                tbu.Amount = material.Amount;
                tbu.PictureURL = material.PictureURL;
                tbu.UpdatedAt = material.UpdatedAt;
            }

            return tbu;
        }

        public List<Material>? SortBy(string sortMethod)
        {
            List<Material>? sorted = new List<Material>(materialList);

            switch(sortMethod.ToLower())
            {
                case "name":
                    sorted = sorted.OrderBy(x => x.Name).ToList();
                    break;
                case "name-d":
                    sorted = sorted.OrderByDescending(x => x.Name).ToList();
                    break;
                case "type":
                    sorted = sorted.OrderBy(x => x.Type).ToList();
                    break;
                case "type-d":
                    sorted = sorted.OrderByDescending(x => x.Type).ToList();
                    break;
                case "amount":
                    sorted = sorted.OrderBy(x => x.Amount).ToList();
                    break;
                case "amount-d":
                    sorted = sorted.OrderByDescending(x => x.Amount).ToList();
                    break;
                case "created":
                    sorted = sorted.OrderBy(x => x.CreatedAt).ToList();
                    break;
                case "created-d":
                    sorted = sorted.OrderByDescending(x => x.CreatedAt).ToList();
                    break;
                case "updated":
                    sorted = sorted.OrderBy(x => x.UpdatedAt).ToList();
                    break;
                case "updated-d":
                    sorted = sorted.OrderByDescending(x => x.UpdatedAt).ToList();
                    break;
                default:
                    break;
            }

            return sorted;
        }

        public List<Material>? Filter(string filter)
        {
            List<Material>? filtered = new List<Material>();

            foreach (var item in materialList)
            {
                if (item.Name.ToLower().Contains(filter.ToLower()) || item.Type.ToLower().Contains(filter.ToLower()) || (item.Tags != null && item.Tags.ToLower().Contains(filter.ToLower())) || item.Amount.ToString().Contains(filter))
                {
                    filtered.Add(item);
                }
            }

            return filtered;
        }
    }
}
