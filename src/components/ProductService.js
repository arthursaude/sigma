import React, { Component } from "react";
import axios from "axios";

export default class ProductService {
	getProductsSmall() {
		products = [];
		return axios.get("http://jsonplaceholder.typicode.com/posts").then((res) => {
			// products.category = res.data.name;
			// products.code = res.data.id;
			// products.name = res.data.name;
			// products.quantity = res.data.lng;
			console.log(res.data);
		});
	}

	getProducts() {
		return axios.get("showcase/demo/data/products.json").then((res) => res.data.data);
	}

	getProductsWithOrdersSmall() {
		return axios.get("showcase/demo/data/products-orders-small.json").then((res) => res.data.data);
	}
}

export async function getProductsWithOrdersSmall() {
	return axios.get("showcase/demo/data/products-orders-small.json").then((res) => res.data.data);
}
