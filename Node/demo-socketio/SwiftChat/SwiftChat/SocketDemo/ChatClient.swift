//
//  ChatClient.swift
//  SwiftChat
//
//  Created by cuong on 6/5/17.
//  Copyright © 2017 Techmaster. All rights reserved.
//

import UIKit
import SocketIO
class ChatClient: UIViewController {

    let socket = SocketIOClient(socketURL: URL(string: "http://localhost:8080")!, config: [.log(false), .forcePolling(false)])

    
    override func viewDidLoad() {
        super.viewDidLoad()

        socket.on(clientEvent: .connect) {data, ack in
            print(data)
            ack.with("ok")
        }
        
        
        socket.on("chat") {data, ack in
            print(data)
            if let item = data[0] as? [String: Any] {
                print(item)
            }
           // ack.with("ok")
            
        }
        socket.connect()
    }

   
}
