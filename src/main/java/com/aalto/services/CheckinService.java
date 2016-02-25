package com.aalto.services;

import java.io.IOException;
import java.io.InputStream;

import org.springframework.web.multipart.MultipartFile;

public class CheckinService {
    public static void checkin(MultipartFile inputFile, String comment, String pid) throws IOException{
        String name = inputFile.getOriginalFilename();
        InputStream in = null;
        in = inputFile.getInputStream();
//        InputStreamDataSource inputStreamDataSource = new InputStreamDataSource(realStream);
//        inputStreamDataSource.setName(name);
//        DataHandler ifcFile = new DataHandler(inputStreamDataSource);
        

    }
}
