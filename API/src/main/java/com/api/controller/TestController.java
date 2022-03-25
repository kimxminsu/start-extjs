package com.api.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.api.service.TestService;

@RestController
public class TestController {
	@Autowired
	private TestService service;
	
	@RequestMapping(value="/test")
	public Map<String,Object> test() {
		Map<String,Object> result = new HashMap<String,Object>();
		result.put("name", "happy");
		result.put("age", 10);
		return result;
	}
	
	@RequestMapping(value="/getList")
	public List<Map<String,Object>> getList(){
		List<Map<String,Object>> list = null;
		try {
			list = service.getList();
		} catch (Exception e) {
			e.printStackTrace();
		}
		System.out.println("TestController printList: "+list);
		return list;
	}
}