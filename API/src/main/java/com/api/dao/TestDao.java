package com.api.dao;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class TestDao {
	
	@Autowired
	private JdbcTemplate sql;
	
	public List<Map<String,Object>> getList() throws SQLException {
		String query = "SELECT * FROM test";
//		System.out.println("TestDao SQL: "+sql);
//		System.out.println("TestDao sql.queryForList(query): "+sql);
//		System.out.println("TestDao query: "+query);
		return sql.queryForList(query);
	}
}
