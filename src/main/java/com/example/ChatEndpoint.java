package com.example;


import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.text.SimpleDateFormat;
import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.websocket.EncodeException;
import javax.websocket.OnClose;
import javax.websocket.OnError;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.RemoteEndpoint;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;





	@ServerEndpoint(value = "/chat")
	public class ChatEndpoint {
	    private static Map<RemoteEndpoint.Basic, Session> sessions = new HashMap<>();

	    @OnMessage
	    public void onMessage(String message, Session session) throws IOException {
	        String date = new SimpleDateFormat("HH:mm").format(new Date());
	        for (RemoteEndpoint.Basic s: sessions.keySet()) {
	            System.out.println((session.getQueryString().substring(5) + "   query str"));
	            System.out.println(" ~ " + date + "(" +  session.getQueryString().substring(5) + "): " + (message));
	            s.sendText(" ~ " + date + "(" +  session.getQueryString().substring(5) + "): " + (message));  

	        }
	    }



	    @OnOpen
	    public void onOpen(Session session) throws IOException, EncodeException {
	        sessions.put(session.getBasicRemote(), session);


	        //READ ABOVE
	        File file = new File("E://restweb/src/main/webapp/dynamic/images/avatars/ccc.jpg");
     

	        for (RemoteEndpoint.Basic current : sessions.keySet()) {
	            byte[] bytes = Files.readAllBytes(file.toPath());
	            String b64Str = Base64.getEncoder().encodeToString(bytes);
	            current.sendText(b64Str);
	            String msg = " ~ " + "� �����: " + session.getQueryString().substring(5) + "  connected to dark side >:)";
	            current.sendText(msg);

	        }

	    }

	    @OnClose
	    public void onClose(Session session) throws IOException {
	        System.out.println("session variable before current session deleting:  " + session.getBasicRemote());
	        sessions.remove(session.getBasicRemote());
	        System.out.println(session.isOpen());
	        session.close();
	        System.out.println("session variable after current session deleting:  " + session.getBasicRemote());


	        for (int i = 0; i <= sessions.size(); i++) {

	            System.out.println("opened sessions: " + sessions.size());

	            for (RemoteEndpoint.Basic session1 : sessions.keySet()) {
	                session1.sendText("disconnected: " + session.getBasicRemote().toString());

	            }
	        }
	    }

	    @OnError
	    public void onError(Session session, Throwable err) {
	        try {
	            System.out.println(err.getCause().toString());
	        } catch (Exception e) {
	            System.out.println("ska error");

	        }
	    }


	}
