namespace MaterialsLib
{
    public class Material
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }
        public List<string>? Tags { get; set; }
        public int Amount { get; set; }
        public string? PictureURL { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set;}

        public Material(int id, string name, string type, List<string>? tags, int amount, string? pictureurl, DateTime createdat, DateTime updatedat)
        {
            Id = id;
            Name = name;
            Type = type;
            Tags = tags;
            Amount = amount;
            PictureURL = pictureurl;
            CreatedAt = createdat;
            UpdatedAt = updatedat;
        }

        public override string ToString()
        {
            return $"{Name}, {Type}, {Tags}, {Amount}, {PictureURL}, {CreatedAt}, {UpdatedAt}";
        }

        public void ValidateName()
        {
            if (Name.Length < 1)
            {
                throw new ArgumentException("Name is a required field.");
            }
            return;
        }

        public void ValidateType()
        {
            if (Type.Length < 1)
            {
                throw new ArgumentException("Type is a required field.");
            }
            return;
        }

        public void ValidateAmount()
        {
            if (Amount < 0)
            {
                throw new ArgumentOutOfRangeException("Amount must be a positive integer.");
            }
            return;
        }

        public void ValidateDateTime()
        {
            if (CreatedAt > UpdatedAt)
            {
                throw new ArgumentOutOfRangeException("Material Creation Date cannot be greater than Update Date.");
            }
            return;
        }
    }
}