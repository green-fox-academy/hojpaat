package com.gfa.zoo.controller;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

public class zooController {
	@RequestMapping("/zoo")
	public @ResponseBody
	String zoo (Model model){
		return "zoo";
	}
}
