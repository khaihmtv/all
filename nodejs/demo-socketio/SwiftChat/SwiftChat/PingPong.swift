//
//  ViewController.swift
//  SwiftChat
//
//  Created by cuong on 6/5/17.
//  Copyright © 2017 Techmaster. All rights reserved.
//https://socket.io/blog/socket-io-on-ios/

import UIKit
import SocketIO


class PingPong: ConsoleScreen {
    
    
    let socket = SocketIOClient(socketURL: URL(string: "http://localhost:8080")!, config: [.log(false), .forcePolling(true)])
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
        self.writeln("At terminal, type node ping.js")
        self.writeln("Then check console log")
        socket.on(clientEvent: .connect) {data, ack in
            print(data)
        }        

        
        socket.on("ping") {data, ack in
            if let item = data[0] as? [String: Any] {
                print(item)
                
                if let count = item["count"] as? Int {
                    print(count)                   
                    
                    self.socket.emit("poong", with: [["msg": "poong", "count": count]])
                }
            }
            ack.with("ok")
            
        }
        socket.connect()
    }
   
    @IBAction func onSendMessage(_ sender: Any) {
    }

}

