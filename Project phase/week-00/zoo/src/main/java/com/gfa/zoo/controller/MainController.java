package com.gfa.zoo.controller;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

public class MainController {
	@RequestMapping("/")
	public @ResponseBody
	String index(Model model){
		return "index";
	}

	@GetMapping("/zoo")
	public @ResponseBody String zoo(Model model) {
		return "zoo";
	}

}
