import { ShopItem } from '~types/ShopItem';

export const SHOPS: ShopItem[] = [
	{
		codeName: 'burgerMall',
		name: 'Burger Mall',
		address: '123 Main Street, Cityville, USA',
		description:
			'Burger Mall is a popular fast food restaurant that offers a variety of delicious burgers, fries, and milkshakes. Our menu offers a wide variety of juicy burgers, from classic cheeseburgers to gourmet creations. Made with premium ingredients and served on freshly baked buns, our burgers are sure to please any burger enthusiast. Pair your burger with crispy fries and refreshing beverages for a complete dining experience. Our friendly staff is dedicated to providing exceptional service. Visit Burger Mall today and indulge in the ultimate burger experience.',
	},
	{
		codeName: 'allTheBest',
		name: 'All The Best',
		address: '456 Elm Avenue, Townsville, USA',
		description:
			"All The Best is a grocery store that specializes in selling a wide variety of grains. From rice and wheat to barley and millet, you can find an extensive selection of high-quality grains at All The Best. Whether you're looking for whole grains or finely processed options, this store has you covered. With a focus on providing the best quality products, All The Best ensures that you can find the perfect grains for your cooking and dietary needs. Explore their aisles and discover a world of grains to enhance your meals and promote a healthy lifestyle",
	},
	{
		codeName: 'manyFoodsStore',
		name: 'ManyFoods Store',
		address: '789 Oak Road, Villagetown, USA',
		description:
			"ManyFoods Store is a premier grocery destination offering an extensive range of fresh fruits and vegetables. With a commitment to quality and variety, ManyFoods Store ensures that customers have access to a wide selection of seasonal produce sourced from reliable local farms and trusted suppliers. From crisp, colorful vegetables like broccoli, carrots, and bell peppers to a diverse assortment of fruits including juicy apples, sweet berries, and tropical delights, ManyFoods Store has everything you need to create healthy and flavorful meals. Whether you're a seasoned chef or a health-conscious individual, you'll find an abundance of options to suit your preferences and dietary needs at ManyFoods Store. Step into their store and explore the vibrant world of fresh produce that will inspire your culinary adventures",
	},
	{
		codeName: 'potatoesBox',
		name: 'Potatoes Box',
		address: '321 Maple Lane, Hamletville, USA',
		description:
			"Potatoes Box is your go-to destination for all things related to delicious and crispy French fries. With a passion for potatoes, Potatoes Box offers a wide variety of high-quality and carefully selected potato varieties, perfect for making the ultimate fries. From classic russet potatoes to unique and flavorful specialty varieties, Potatoes Box ensures that every fry enthusiast can find their preferred potato for the perfect fry experience. At Potatoes Box, they understand that great fries start with quality ingredients. That's why they source their potatoes from trusted growers who prioritize taste and texture. Each potato is hand-picked and undergoes rigorous quality checks to ensure that only the best make it into your fry basket.",
	},
];

export async function getAllShops(): Promise<ShopItem[]> {
	return await new Promise((resolve, reject) => {
		try {
			resolve(SHOPS);
		} catch (error) {
			reject(error);
		}
	});
}

export async function getShop(shop: string): Promise<ShopItem> {
	return await new Promise((resolve, reject) => {
		try {
			const data = SHOPS.find((shopItem) => shop === shopItem.codeName);
			if (data) resolve(data);
			throw new Error("Can't find any shop like this!");
		} catch (error) {
			reject(error);
		}
	});
}
