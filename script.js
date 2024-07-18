document.addEventListener('DOMContentLoaded', () => {
    const products = [


        //games
            { id: 7, img: './images/games/1.jpg', title: 'PS3 GAME PAD', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 150.00' },
            { id: 1, img: './images/games/1 (1).jpg', title: 'PS3 GAME PAD', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 150.00' },
            //{ id: 7, img: './images/games/1 (2).jpg', title: 'XBOX CONTROLLER', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 200.00' },
            { id: 8, img: './images/games/1 (3).jpg', title: 'PS3 CONSOLE', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 2200.00' },
            { id: 9, img: './images/games/1 (4).jpg', title: ' COMPUTER GAMEPAD', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 3500.00' },
            { id: 10, img: './images/games/1 (5).jpg', title: 'XBOX SERIES X', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 3200.00' },
            { id: 11, img: './images/games/1 (6).jpg', title: 'VR HEADSET', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 1800.00' },
            { id: 12, img: './images/games/1 (7).jpg', title: 'GAMING D4RR', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 800.00' },
            { id: 13, img: './images/games/1 (8).jpg', title: 'ANDROID STIMULATOR', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 180.00' },
            { id: 14, img: './images/games/1 (9).jpg', title: 'GAMING D344', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 6500.00' },
            { id: 15, img: './images/games/1 (10).jpg', title: 'NINTENDO SWITCH', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 120.00' },
            
            // const smartphones = [
            { id: 2, img: './images/smart phones/1 (1).jpg', title: 'TECHNO RYNO', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 1150.00' },
            { id: 16, img: './images/smart phones/1 (2).jpg', title: 'IPHONE 13', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 7500.00' },
            { id: 17, img: './images/smart phones/1 (3).jpg', title: 'SAMSUNG GALAXY S21', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 6800.00' },
            { id: 18, img: './images/smart phones/1 (4).jpg', title: 'ONEPLUS 9', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 4000.00' },
            { id: 19, img: './images/smart phones/1 (5).jpg', title: 'GOOGLE PIXEL 6', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 4500.00' },
            { id: 20, img: './images/smart phones/1 (6).jpg', title: 'XIAOMI MI 11', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 3200.00' },
            { id: 21, img: './images/smart phones/1 (7).jpg', title: 'NOKIA XR20', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 2200.00' },
            { id: 22, img: './images/smart phones/1 (8).jpg', title: 'OPPO FIND X3', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 3700.00' },
            { id: 23, img: './images/smart phones/1 (9).jpg', title: 'SONY XPERIA 1 III', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 6200.00' },
            { id: 24, img: './images/smart phones/1 (10).jpg', title: 'HUAWEI P40', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 5000.00' },
  
            //const washingMachines = [
            { id: 3, img: './images/wash machine/1 (1).jpg', title: 'NEXUS WASHING', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 2200.00' },
            { id: 25, img: './images/wash machine/1 (2).jpg', title: 'LG FRONT LOAD', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 4500.00' },
            { id: 26, img: './images/wash machine/1 (3).jpg', title: 'SAMSUNG TOP LOAD', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 3800.00' },
            { id: 27, img: './images/wash machine/1 (4).jpg', title: 'WHIRLPOOL', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 4000.00' },
            { id: 28, img: './images/wash machine/1 (5).jpg', title: 'BOSCH WASHER', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 5200.00' },
            { id: 29, img: './images/wash machine/1 (6).jpg', title: 'HAIER WASHING', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 2500.00' },
            { id: 30, img: './images/wash machine/1 (7).jpg', title: 'IFB FRONT LOAD', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 4300.00' },
            { id: 31, img: './images/wash machine/1 (8).jpg', title: 'GODREJ WASHER', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 3500.00' },
            { id: 32, img: './images/wash machine/1 (9).jpg', title: 'PANASONIC WASHING', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 3700.00' },
            { id: 33, img: './images/wash machine/1 (10).jpg', title: 'TOSHIBA WASHER', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 3100.00' },

            //headphones
            { id: 4, img: './images/headphones/1 (6).jpg', title: 'BLY HEADSET', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 300.00' },
            { id: 34, img: './images/headphones/1 (2).jpg', title: 'SONY WH-1000XM4', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 1500.00' },
            { id: 35, img: './images/headphones/1 (3).jpg', title: 'BOSE QUIETCOMFORT 35', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 2000.00' },
            { id: 36, img: './images/headphones/1 (4).jpg', title: 'JBL TUNE 750BTNC', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 800.00' },
            { id: 37, img: './images/headphones/1 (5).jpg', title: 'APPLE AIRPODS MAX', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 2200.00' },
            { id: 38, img: './images/headphones/1 (7).jpg', title: 'SENNHEISER HD 450BT', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 1200.00' },
            { id: 39, img: './images/headphones/1 (8).jpg', title: 'BEATS STUDIO3', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 1700.00' },
            { id: 40, img: './images/headphones/1 (9).jpg', title: 'AKG N700NC', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 1400.00' },
            { id: 41, img: './images/headphones/1 (10).jpg', title: 'PHILIPS PH805', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 900.00' },
            { id: 42, img: './images/headphones/1 (11).jpg', title: 'JAYBIRD VISTA', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 1100.00' },

            //laptop
            { id: 5, img: './images/electronics/laptop4.jpg', title: 'HP SLIM S32', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 5200.00' },
            { id: 43, img: './images/laptops/1 (2).jpg', title: 'MACBOOK PRO', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 12000.00' },
            { id: 44, img: './images/laptops/1 (3).jpg', title: 'DELL XPS 13', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 9000.00' },
            { id: 45, img: './images/laptops/1 (4).jpg', title: 'LENOVO THINKPAD X1', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 8000.00' },
            { id: 46, img: './images/laptops/1 (5).jpg', title: 'ASUS ROG ZEPHYRUS', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 10000.00' },
            { id: 47, img: './images/laptops/1 (6).jpg', title: 'MSI GS66 STEALTH', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 11000.00' },
            { id: 48, img: './images/laptops/1 (7).jpg', title: 'ACER SWIFT 3', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 6000.00' },
            { id: 49, img: './images/laptops/1 (8).jpg', title: 'SAMSUNG GALAXY BOOK', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 7500.00' },
            { id: 50, img: './images/laptops/1 (9).jpg', title: 'HP SPECTRE X360', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 8500.00' },
            { id: 51, img: './images/laptops/1 (10).jpg', title: 'RAZER BLADE 15', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 14000.00' },
            
            //cellphones
            { id: 6, img: './images/cell phones/1 (11).jpg', title: 'SAMSUNG DOUS', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 300.00' },
            { id: 52, img: './images/cell phones/1 (2).jpg', title: 'NOKIA 3310', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 100.00' },
            { id: 53, img: './images/cell phones/1 (3).jpg', title: 'MOTOROLA RAZR', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 1200.00' },
            { id: 54, img: './images/cell phones/1 (4).jpg', title: 'BLACKBERRY BOLD', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 800.00' },
            { id: 55, img: './images/cell phones/1 (5).jpg', title: 'SAMSUNG GALAXY A12', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 1500.00' },
            { id: 56, img: './images/cell phones/1 (6).jpg', title: 'HUAWEI Y9', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 1300.00' },
            { id: 57, img: './images/cell phones/1 (7).jpg', title: 'VIVO Y20', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 900.00' },
            { id: 58, img: './images/cell phones/1 (8).jpg', title: 'OPPO A53', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 1100.00' },
            { id: 59, img: './images/cell phones/1 (9).jpg', title: 'REALME C25', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 800.00' },
            { id: 60, img: './images/cell phones/1 (10).jpg', title: 'TECNO SPARK 7', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 600.00' },
            { id: 61, img: './images/cell phones/1 (13).jpg', title: 'TECNO SPARK 7', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 600.00' },
            
            //fridges
            //{ id: 6, img: './images/cell phones/1 (11).jpg', title: 'SAMSUNG DOUS', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 300.00' },
            { id: 62, img: './images/fridges/1 (2).jpg', title: 'FRIDGE 1', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 100.00' },
            { id: 63, img: './images/fridges/1 (9).jpg', title: 'FRIDGE 2', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 1200.00' },
            { id: 64, img: './images/fridges/1 (17).jpg', title: 'FRIDGE 3', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 800.00' },
            { id: 65, img: './images/fridges/1 (10).jpg', title: 'FRIDGE 4', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 1500.00' },
            { id: 66, img: './images/fridges/1 (11).jpg', title: 'FRIDGE 5', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 1300.00' },
            { id: 67, img: './images/fridges/1 (12).jpg', title: 'FRIDGE 6', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 900.00' },
            { id: 68, img: './images/fridges/1 (13).jpg', title: 'FRIDGE 7', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 1100.00' },
            { id: 69, img: './images/fridges/1 (14).jpg', title: 'FRIDGE 8', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 800.00' },
            { id: 70, img: './images/fridges/1 (15).jpg', title: 'FRIDGE 9', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 600.00' },
            { id: 71, img: './images/fridges/1 (16).jpg', title: 'FRIDGE 10', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 600.00' },
        //home appliance
            { id: 72, img: './images/home&office/1 (1).jpg', title: 'wadrobe 1', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 100.00' },
            { id: 73, img: './images/home&office/1 (2).jpg', title: 'wadrobe 2', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 1200.00' },
            { id: 74, img: './images/home&office/1 (3).jpg', title: 'wadrobe 3', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 800.00' },
            { id: 75, img: './images/home&office/1 (4).jpg', title: 'wadrobe 4', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 1500.00' },
            { id: 76, img: './images/home&office/1 (5).jpg', title: 'wadrobe 5', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 1300.00' },
            { id: 77, img: './images/home&office/1 (6).jpg', title: 'wadrobe 6', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 900.00' },
            { id: 78, img: './images/home&office/1 (7).jpg', title: 'wadrobe 7', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 1100.00' },
            { id: 79, img: './images/home&office/1 (8).jpg', title: 'wadrobe 8', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 800.00' },
            { id: 80, img: './images/home&office/1 (9).jpg', title: 'wadrobe 9', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 600.00' },
            { id: 81, img: './images/home&office/1 (10).jpg', title: 'wadrobe 10', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 600.00' },

            //STOVES
            { id: 82, img: './images/gascookers/1 (1).jpg', title: 'STOVES 1', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 100.00' },
            { id: 83, img: './images/gascookers/1 (2).jpg', title: 'STOVES 2', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 1200.00' },
            { id: 84, img: './images/gascookers/1 (3).jpg', title: 'STOVES 3', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 800.00' },
            { id: 85, img: './images/gascookers/1 (4).jpg', title: 'STOVES 4', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 1500.00' },
            { id: 86, img: './images/gascookers/1 (5).jpg', title: 'STOVES 5', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 1300.00' },
            { id: 87, img: './images/gascookers/1 (6).jpg', title: 'STOVES 6', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 900.00' },
            { id: 88, img: './images/gascookers/1 (7).jpg', title: 'STOVES 7', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 1100.00' },
            { id: 89, img: './images/gascookers/1 (8).jpg', title: 'STOVES 8', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 800.00' },
            { id: 90, img: './images/gascookers/1 (9).jpg', title: 'STOVES 9', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 600.00' },
            { id: 91, img: './images/gascookers/1 (10).jpg', title: 'STOVES 10', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 600.00' },

            //FREEZERS
            { id: 92, img: './images/freezer/1 (1).jpg', title: 'FREEZER 1', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 100.00' },
            { id: 93, img: './images/freezer/1 (2).jpg', title: 'FREEZER 2', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 1200.00' },
            { id: 94, img: './images/freezer/1 (3).jpg', title: 'FREEZER 3', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 800.00' },
            { id: 95, img: './images/freezer/1 (4).jpg', title: 'FREEZER 4', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 1500.00' },
            { id: 96, img: './images/freezer/1 (5).jpg', title: 'FREEZER 5', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 1300.00' },
            { id: 97, img: './images/freezer/1 (6).jpg', title: 'FREEZER 6', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 900.00' },
            { id: 98, img: './images/freezer/1 (7).jpg', title: 'FREEZER 7', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 1100.00' },
            { id: 99, img: './images/freezer/1 (8).jpg', title: 'FREEZER 8', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 800.00' },
            { id: 100, img: './images/freezer/1 (9).jpg', title: 'FREEZER 9', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 600.00' },
            { id: 101, img: './images/freezer/1 (10).jpg', title: 'FREEZER 10', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 600.00' },

            //POWERBANKS
            { id: 192, img: './images/powerbanks/1 (1).jpg', title: 'POWERBANK 1', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 100.00' },
            { id: 193, img: './images/powerbanks/1 (2).jpg', title: 'POWERBANK 2', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 1200.00' },
            { id: 194, img: './images/powerbanks/1 (3).jpg', title: 'POWERBANK 3', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 800.00' },
            { id: 195, img: './images/powerbanks/1 (4).jpg', title: 'POWERBANK 4', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 1500.00' },
            { id: 196, img: './images/powerbanks/1 (5).jpg', title: 'POWERBANK 5', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 1300.00' },
            { id: 197, img: './images/powerbanks/1 (6).jpg', title: 'POWERBANK 6', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 900.00' },
            { id: 198, img: './images/powerbanks/1 (7).jpg', title: 'POWERBANK 7', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 1100.00' },
            { id: 199, img: './images/powerbanks/1 (8).jpg', title: 'POWERBANK 8', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 800.00' },
            { id: 1100, img: './images/powerbanks/1 (9).jpg', title: 'POWERBANK 9', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 600.00' },
            { id: 1101, img: './images/powerbanks/1 (10).jpg', title: 'POWERBANK 10', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 600.00' },

            //TABLETS
            { id: 292, img: './images/tablets/1 (1).jpg', title: 'TABLET 1', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 100.00' },
            { id: 293, img: './images/tablets/1 (2).jpg', title: 'TABLET 2', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 1200.00' },
            { id: 294, img: './images/tablets/1 (3).jpg', title: 'TABLET 3', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 800.00' },
            { id: 295, img: './images/tablets/1 (4).jpg', title: 'TABLET 4', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 1500.00' },
            { id: 296, img: './images/tablets/1 (5).jpg', title: 'TABLET 5', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 1300.00' },
            { id: 297, img: './images/tablets/1 (6).jpg', title: 'TABLET 6', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 900.00' },
            { id: 298, img: './images/tablets/1 (7).jpg', title: 'TABLET 7', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 1100.00' },
            { id: 299, img: './images/tablets/1 (8).jpg', title: 'TABLET 8', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 800.00' },
            { id: 2100, img: './images/tablets/1 (9).jpg', title: 'TABLET 9', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 600.00' },
            { id: 2101, img: './images/tablets/1 (10).jpg', title: 'TABLET 10', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 600.00' },

            //WATCHES
            { id: 392, img: './images/watches/1 (1).jpg', title: 'WATCH 1', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 100.00' },
            { id: 393, img: './images/watches/1 (2).jpg', title: 'WATCH 2', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 1200.00' },
            { id: 394, img: './images/watches/1 (3).jpg', title: 'WATCH 3', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 800.00' },
            { id: 395, img: './images/watches/1 (4).jpg', title: 'WATCH 4', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 1500.00' },
            { id: 396, img: './images/watches/1 (5).jpg', title: 'WATCH 5', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 1300.00' },
            { id: 397, img: './images/watches/1 (6).jpg', title: 'WATCH 6', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 900.00' },
            { id: 398, img: './images/watches/1 (7).jpg', title: 'WATCH 7', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 1100.00' },
            { id: 399, img: './images/watches/1 (8).jpg', title: 'WATCH 8', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 800.00' },
            { id: 310, img: './images/watches/1 (9).jpg', title: 'WATCH 9', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 600.00' },
            { id: 311, img: './images/watches/1 (10).jpg', title: 'WATCH 10', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 600.00' },

            //SPEAKERS
            { id: 492, img: './images/speakers/1 (1).jpg', title: 'SPEAKER 1', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 100.00' },
            { id: 493, img: './images/speakers/1 (2).jpg', title: 'SPEAKER 2', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 1200.00' },
            { id: 494, img: './images/speakers/1 (3).jpg', title: 'SPEAKER 3', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 800.00' },
            { id: 495, img: './images/speakers/1 (4).jpg', title: 'SPEAKER 4', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 1500.00' },
            { id: 496, img: './images/speakers/1 (5).jpg', title: 'SPEAKER 5', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 1300.00' },
            { id: 497, img: './images/speakers/1 (6).jpg', title: 'SPEAKER 6', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 900.00' },
            { id: 498, img: './images/speakers/1 (7).jpg', title: 'SPEAKER 7', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 1100.00' },
            { id: 499, img: './images/speakers/1 (8).jpg', title: 'SPEAKER 8', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 800.00' },
            { id: 410, img: './images/speakers/1 (9).jpg', title: 'SPEAKER 9', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 600.00' },
            { id: 411, img: './images/speakers/1 (10).jpg', title: 'SPEAKER 10', description: 'This is a test decription of the above products. all products are original', price: 'GH¢ 600.00' }
            
            


]
const cartCount = document.getElementById('cart-count');
    function updateCartCount() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cartCount.textContent = cart.length;
    }

    function addToCart(product) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const isProductInCart = cart.some(item => item.id === product.id);

        if (isProductInCart) {
            alert('Product is already in the cart');
        } else {
            cart.push(product);
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartCount();
            alert('Product added to cart');
        }
    }

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (e) => {
            const id = parseInt(e.target.getAttribute('data-id'));
            const product = products.find(p => p.id === id);
            if (product) {
                addToCart(product);
            }
        });
    });

    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    const product = products.find(p => p.id === productId);

    if (product) {
        const productImg = document.getElementById('product-img');
        const productTitle = document.getElementById('product-title');
        const productDescription = document.getElementById('product-description');
        const productPrice = document.getElementById('product-price');
        const addToCartButton = document.getElementById('add-to-cart');

        productImg.src = product.img;
        productTitle.textContent = product.title;
        productDescription.textContent = product.description;
        productPrice.textContent = product.price;

        addToCartButton.addEventListener('click', () => {
            addToCart(product);
        });
    }

    updateCartCount();
});
