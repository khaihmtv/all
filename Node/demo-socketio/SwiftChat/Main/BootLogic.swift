//
//  BootLogic.swift
//  TechmasterSwiftApp
//  Techmaster Vietnam

import UIKit

class BootLogic: NSObject {
    
    var menu : [MenuSection]!
    class func boot(_ window:UIWindow){
        let basic = MenuSection(section: "Basic", menus:[
            Menu(title: "Ping - Pong", viewClass: "PingPong"),
            Menu(title: "Chat", viewClass: "ChatClient"),
            ])

        
        let mainScreen = MainScreen(style: UITableViewStyle.grouped)
        mainScreen.menu = [basic]
        mainScreen.title = "Demo Socket.io"
        mainScreen.about = "Written by Trinh Minh Cuong"
        
        let nav = UINavigationController(rootViewController: mainScreen)
        //nav.navigationBar.barStyle = UIBarStyle.BlackOpaque
        //nav.navigationBar.opaque = true
        window.rootViewController = nav        
      
    }   
}
