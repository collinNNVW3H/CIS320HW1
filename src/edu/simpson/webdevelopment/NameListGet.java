package edu.simpson.webdevelopment;

import com.google.gson.Gson;

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

        // Get setup up to output JSON text
        response.setContentType("application/json");
        PrintWriter out = response.getWriter();

        // Use our DAO to get a list of people
        List <Person> peopleList = PersonDAO.getPeople();

        // Create an instance of the Google class that can convert
        // business object to JSON strings.
        Gson gson = new Gson();

        // Go ahead and turn peopleList into a JSON string
        String json = gson.toJson(peopleList);

        // Write out that string
        out.println(json);

    }
}