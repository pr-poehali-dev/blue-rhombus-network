import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [activeChat, setActiveChat] = useState("general");

  const chats = [
    {
      id: "general",
      name: "💎 Главный чат",
      lastMessage: "Привет, алмазные друзья!",
      time: "12:30",
      unread: 3,
    },
    {
      id: "art",
      name: "🎨 Арт-канал",
      lastMessage: "Новые ромбики в галерее",
      time: "11:45",
      unread: 1,
    },
    {
      id: "music",
      name: "🎵 Музыка",
      lastMessage: "Треки с алмазным звучанием",
      time: "10:20",
      unread: 0,
    },
    {
      id: "news",
      name: "📰 Новости",
      lastMessage: "Обновления сообщества",
      time: "09:15",
      unread: 5,
    },
  ];

  const messages = [
    {
      id: 1,
      user: "DiamondKing",
      avatar: "💎",
      message: "Привет всем! Кто готов к алмазным приключениям?",
      time: "12:30",
      diamond: true,
    },
    {
      id: 2,
      user: "CrystalMaster",
      avatar: "🔷",
      message: "Только что создал новый арт с синими ромбами!",
      time: "12:25",
      diamond: false,
    },
    {
      id: 3,
      user: "BlueGem",
      avatar: "💙",
      message: "Лазурный цвет сегодня особенно красив",
      time: "12:20",
      diamond: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      {/* Header */}
      <div className="bg-white border-b border-blue-100 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center transform rotate-45 hover:scale-110 transition-transform duration-300">
              <div className="w-6 h-6 bg-white rounded-sm transform -rotate-45"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-blue-600">
                Diamond Fandom
              </h1>
              <p className="text-sm text-blue-500">
                Сообщество алмазных ценителей
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Icon name="Bell" size={16} />
            </Button>
            <Button variant="outline" size="sm">
              <Icon name="Settings" size={16} />
            </Button>
            <Avatar>
              <AvatarFallback className="bg-blue-500 text-white">
                💎
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>

      <div className="flex h-[calc(100vh-80px)]">
        {/* Sidebar */}
        <div className="w-80 bg-white border-r border-blue-100 flex flex-col">
          <div className="p-4 border-b border-blue-100">
            <div className="relative">
              <Icon
                name="Search"
                size={20}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400"
              />
              <Input
                placeholder="Поиск чатов..."
                className="pl-10 border-blue-200"
              />
            </div>
          </div>

          <Tabs defaultValue="chats" className="flex-1">
            <TabsList className="grid w-full grid-cols-3 mx-4 mt-4">
              <TabsTrigger value="chats">Чаты</TabsTrigger>
              <TabsTrigger value="channels">Каналы</TabsTrigger>
              <TabsTrigger value="groups">Группы</TabsTrigger>
            </TabsList>

            <TabsContent value="chats" className="flex-1 mt-4">
              <ScrollArea className="h-full px-4">
                <div className="space-y-2">
                  {chats.map((chat) => (
                    <Card
                      key={chat.id}
                      className={`p-3 cursor-pointer transition-all duration-200 hover:bg-blue-50 hover:scale-[1.02] hover:shadow-sm ${
                        activeChat === chat.id
                          ? "bg-blue-50 border-blue-200"
                          : "border-transparent"
                      }`}
                      onClick={() => setActiveChat(chat.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <h3 className="font-medium text-gray-900">
                              {chat.name}
                            </h3>
                            {chat.unread > 0 && (
                              <Badge
                                variant="default"
                                className="bg-blue-500 text-xs"
                              >
                                {chat.unread}
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-gray-500 truncate">
                            {chat.lastMessage}
                          </p>
                        </div>
                        <div className="text-xs text-gray-400">{chat.time}</div>
                      </div>
                    </Card>
                  ))}
                </div>
              </ScrollArea>
            </TabsContent>

            <TabsContent value="channels" className="flex-1 mt-4">
              <div className="px-4 py-8 text-center text-gray-500">
                <Icon
                  name="Hash"
                  size={48}
                  className="mx-auto mb-4 text-blue-300"
                />
                <p>Каналы появятся здесь</p>
              </div>
            </TabsContent>

            <TabsContent value="groups" className="flex-1 mt-4">
              <div className="px-4 py-8 text-center text-gray-500">
                <Icon
                  name="Users"
                  size={48}
                  className="mx-auto mb-4 text-blue-300"
                />
                <p>Группы появятся здесь</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="bg-white border-b border-blue-100 px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-lg">💎</span>
                </div>
                <div>
                  <h2 className="font-semibold text-gray-900">Главный чат</h2>
                  <p className="text-sm text-gray-500">156 участников онлайн</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <Icon name="Phone" size={16} />
                </Button>
                <Button variant="outline" size="sm">
                  <Icon name="Video" size={16} />
                </Button>
                <Button variant="outline" size="sm">
                  <Icon name="MoreHorizontal" size={16} />
                </Button>
              </div>
            </div>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 p-6">
            <div className="space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className="flex space-x-3">
                  <Avatar>
                    <AvatarFallback className="bg-blue-100 text-blue-600">
                      {msg.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <span className="font-medium text-gray-900">
                        {msg.user}
                      </span>
                      {msg.diamond && (
                        <Badge
                          variant="outline"
                          className="text-xs border-blue-200 text-blue-600"
                        >
                          💎 Алмазный
                        </Badge>
                      )}
                      <span className="text-xs text-gray-500">{msg.time}</span>
                    </div>
                    <p className="text-gray-700 mt-1">{msg.message}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          {/* Message Input */}
          <div className="bg-white border-t border-blue-100 p-4">
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm">
                <Icon name="Plus" size={16} />
              </Button>
              <div className="flex-1 relative">
                <Input
                  placeholder="Напишите сообщение..."
                  className="pr-20 border-blue-200"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <Icon name="Smile" size={16} />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Icon name="Paperclip" size={16} />
                  </Button>
                </div>
              </div>
              <Button className="bg-blue-500 hover:bg-blue-600 hover:scale-105 transition-transform duration-200">
                <Icon name="Send" size={16} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
