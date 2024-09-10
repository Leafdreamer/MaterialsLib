using Microsoft.VisualStudio.TestTools.UnitTesting;
using MaterialsLib;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MaterialsLib.Tests
{
    [TestClass()]
    public class MaterialTests
    {
        [TestMethod()]
        public void ValidateNameTest()
        {
            Material m1 = new Material(1, "A", "ABC", new List<string>(), 20, "", DateTime.Now, DateTime.Now);
            Material m2 = new Material(2, "", "ABC", new List<string>(), 20, "", DateTime.Now, DateTime.Now);

            // m1 contains a Valid Name, m2 does not
            m1.ValidateName();
            Assert.ThrowsException<ArgumentException>(() => m2.ValidateName());
        }

        [TestMethod()]
        public void ValidateTypeTest()
        {
            Material m1 = new Material(1, "ABC", "A", new List<string>(), 20, "", DateTime.Now, DateTime.Now);
            Material m2 = new Material(2, "ABC", "", new List<string>(), 20, "", DateTime.Now, DateTime.Now);

            // m1 contains a Valid Type, m2 does not
            m1.ValidateType();
            Assert.ThrowsException<ArgumentException>(() => m2.ValidateType());
        }

        [TestMethod()]
        public void ValidateAmountTest()
        {
            Material m1 = new Material(1, "ABC", "ABC", new List<string>(), 1, "", DateTime.Now, DateTime.Now);
            Material m2 = new Material(2, "ABC", "ABC", new List<string>(), 0, "", DateTime.Now, DateTime.Now);
            Material m3 = new Material(3, "ABC", "ABC", new List<string>(), -1, "", DateTime.Now, DateTime.Now);

            // m1 and m2 contain a valid amount, m3 does not
            m1.ValidateAmount();
            m2.ValidateAmount();
            Assert.ThrowsException<ArgumentOutOfRangeException>(() => m3.ValidateAmount());
        }

        [TestMethod()]
        public void ValidateDateTimeTest()
        {
            Material m1 = new Material(1, "ABC", "ABC", new List<string>(), 20, "", DateTime.Now, DateTime.Now);
            Material m2 = new Material(2, "ABC", "ABC", new List<string>(), 20, "", DateTime.Now, DateTime.Now);

            Thread.Sleep(1000);

            m2.CreatedAt = DateTime.Now;

            m1.ValidateDateTime();
            Assert.ThrowsException<ArgumentOutOfRangeException>(() => m2.ValidateDateTime());
        }
    }
}