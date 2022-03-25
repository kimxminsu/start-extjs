package com.api.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {
	@RequestMapping(value="/test")
	public Map<String,Object> test() {
		Map<String,Object> result = new HashMap<String,Object>();
		result.put("name", "happy");
		result.put("age", 10);
		return result;
	}
}