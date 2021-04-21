package com.example;


import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.nio.file.Files;
import java.util.Arrays;
import com.google.gson.Gson;
import com.google.gson.JsonArray;

@WebServlet("/play")
public class MusicStreamServlet extends HttpServlet {

	private static final long serialVersionUID = 935548653122932506L;


@Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("poskhugyufytdt");
        File file = new File(req.getServletContext().getRealPath("dynamic/sounds/music"));
        File[] files = file.listFiles();
        /*����� ������� ������� � ���� "ArtistName : SongName" <-- JsonElement*/
     JsonArray names = new JsonArray();

//                names.putAll(files);
        for(File cur : files){
            names.add(cur.getName());
        }


        System.out.println("files added to names array");





        String x = new Gson().toJson(names);


        System.out.println("FILES:  " + files.length);


        resp.setContentType("json");
        resp.setCharacterEncoding("UTF-8");


        System.out.println("xxxxxxxxxxxxxxxx");

        PrintWriter out =  resp.getWriter();
        out.write(x);

        out.flush();
        out.close();
    };
    
    
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
//        String songName = (String) req.getAttribute("song");


        System.out.println("gettt");

        //File file =  dao.searhAudio(); =>
        String requestQuery = req.getQueryString();
        System.out.println(requestQuery);

        String songName = requestQuery.replace("%20", " ");
        songName = songName.substring(5);

        System.out.println(songName);
  



        System.out.println(songName);


        File file = new File(getServletContext().getRealPath("dynamic/sounds/music/" + songName));
        System.out.println(file.isFile() + "   isFile?");


        System.out.println(file.length());
        byte[] byteArray = Files.readAllBytes(file.toPath());

        System.out.println(byteArray.length  + "  bytearray");

        FileInputStream in = new FileInputStream(file);
        OutputStream out = resp.getOutputStream();
        resp.setCharacterEncoding("UTF-8");
        resp.setContentLength(byteArray.length);
        resp.setContentType("application/octet-stream; audio/mp3");
        resp.setHeader("Content-Disposition", "attachment; filename=" + file.getName());
        System.out.println(resp.getCharacterEncoding());
        System.out.println(Arrays.toString(resp.getHeaderNames().toArray()));
        resp.setStatus(200);

        out.write(byteArray);
        out.flush();
        out.close();
        in.close();







        //TODO Checking database on named song containing





    //TODO: if server contains named song -
    // resp.setContentLength();
//    resp.setCharacterEncoding(maybe base64);
    }
}
