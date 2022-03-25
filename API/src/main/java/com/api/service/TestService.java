package com.api.service;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.dao.TestDao;

@Service
public class TestService {

	@Autowired
	private TestDao dao;
	
	public List<Map<String,Object>> getList() throws SQLException {
		return dao.getList();
	}
}
