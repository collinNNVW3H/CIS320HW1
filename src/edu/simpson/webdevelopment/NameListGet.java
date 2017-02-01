package edu.simpson.webdevelopment;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

/**
 * Created by collin.hemann on 1/26/2017.
 */
@WebServlet(name = "NameListGet")
public class NameListGet extends HttpServlet {

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {



        response.setContentType("application/json");
        PrintWriter out = response.getWriter();

        // Replace the line below with your database code that will
        // write out your JSON file.

        out.print("{id: 1, ");
        out.print("first: Paul, ");
        out.print("last: Craven}, ");

        out.print("{id: 2, ");
        out.print("first: Sam, ");
        out.print("last: Simpson}");

    }
}

