
package com.aalto.controllers;

import static com.aalto.controllers.MainController.logger;
import com.aalto.services.CheckinService;
import java.io.IOException;
import java.util.Map;
import java.util.logging.Level;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
public class CheckinController {
    
    @RequestMapping(value = "/checkin", method = RequestMethod.POST)
    public String checkin(@RequestParam Map<String,String> reqParams, @RequestParam(required = true) MultipartFile inputFile) throws IOException{
        logger.log(Level.INFO, "log: ProjectController checkin!!");
        
        String pid = reqParams.get("pid");
        String comment = reqParams.get("comment");
        
        CheckinService.checkin(inputFile, comment, pid);
        
        
        
        
        
        return "ssdf";
    }
}
