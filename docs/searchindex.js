Search.setIndex({docnames:["README","TikTokLive","TikTokLive.client","TikTokLive.proto","TikTokLive.types","index","modules"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":4,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,sphinx:56},filenames:["README.md","TikTokLive.rst","TikTokLive.client.rst","TikTokLive.proto.rst","TikTokLive.types.rst","index.rst","modules.rst"],objects:{"":[[1,0,0,"-","TikTokLive"]],"TikTokLive.client":[[2,0,0,"-","base"],[2,0,0,"-","client"],[2,0,0,"-","http"],[2,0,0,"-","proxy"]],"TikTokLive.client.base":[[2,1,1,"","BaseClient"]],"TikTokLive.client.base.BaseClient":[[2,2,1,"","add_proxies"],[2,3,1,"","available_gifts"],[2,3,1,"","connected"],[2,2,1,"","get_proxies"],[2,2,1,"","remove_proxies"],[2,2,1,"","retrieve_available_gifts"],[2,2,1,"","retrieve_room_info"],[2,3,1,"","room_id"],[2,3,1,"","room_info"],[2,2,1,"","run"],[2,2,1,"","send_message"],[2,2,1,"","set_proxies_enabled"],[2,2,1,"","start"],[2,2,1,"","stop"],[2,3,1,"","unique_id"],[2,3,1,"","viewer_count"]],"TikTokLive.client.client":[[2,1,1,"","TikTokLiveClient"]],"TikTokLive.client.http":[[2,1,1,"","TikTokHTTPClient"]],"TikTokLive.client.http.TikTokHTTPClient":[[2,4,1,"","DEFAULT_CLIENT_PARAMS"],[2,4,1,"","DEFAULT_REQUEST_HEADERS"],[2,4,1,"","TIKTOK_HTTP_ORIGIN"],[2,4,1,"","TIKTOK_URL_WEB"],[2,4,1,"","TIKTOK_URL_WEBCAST"],[2,2,1,"","get_deserialized_object_from_webcast_api"],[2,2,1,"","get_json_object_from_webcast_api"],[2,2,1,"","get_livestream_page_html"],[2,2,1,"","post_json_to_webcast_api"]],"TikTokLive.client.proxy":[[2,1,1,"","ProxyContainer"],[2,1,1,"","RotationSetting"]],"TikTokLive.client.proxy.ProxyContainer":[[2,3,1,"","count"],[2,2,1,"","get"],[2,2,1,"","set_enabled"],[2,2,1,"","set_pinned"],[2,2,1,"","set_unpinned"]],"TikTokLive.client.proxy.RotationSetting":[[2,4,1,"","CONSECUTIVE"],[2,4,1,"","PINNED"],[2,4,1,"","RANDOM"]],"TikTokLive.proto":[[3,0,0,"-","utilities"]],"TikTokLive.proto.utilities":[[3,5,1,"","deserialize_message"],[3,5,1,"","from_dict_plus"]],"TikTokLive.types":[[4,0,0,"-","errors"],[4,0,0,"-","events"],[4,0,0,"-","objects"]],"TikTokLive.types.errors":[[4,6,1,"","AlreadyConnected"],[4,6,1,"","AlreadyConnecting"],[4,6,1,"","ChatMessageRepeat"],[4,6,1,"","ChatMessageSendFailure"],[4,6,1,"","FailedConnection"],[4,6,1,"","FailedFetchGifts"],[4,6,1,"","FailedFetchRoomInfo"],[4,6,1,"","FailedHTTPRequest"],[4,6,1,"","FailedRoomPolling"],[4,6,1,"","InvalidSessionId"],[4,6,1,"","LiveNotFound"]],"TikTokLive.types.events":[[4,1,1,"","AbstractEvent"],[4,1,1,"","CommentEvent"],[4,1,1,"","ConnectEvent"],[4,1,1,"","DisconnectEvent"],[4,1,1,"","FollowEvent"],[4,1,1,"","GiftEvent"],[4,1,1,"","JoinEvent"],[4,1,1,"","LikeEvent"],[4,1,1,"","LiveEndEvent"],[4,1,1,"","QuestionEvent"],[4,1,1,"","ShareEvent"],[4,1,1,"","UnknownEvent"],[4,1,1,"","ViewerCountUpdateEvent"]],"TikTokLive.types.events.AbstractEvent":[[4,3,1,"","as_dict"],[4,4,1,"","name"]],"TikTokLive.types.events.CommentEvent":[[4,4,1,"","comment"],[4,4,1,"","name"],[4,4,1,"","user"]],"TikTokLive.types.events.ConnectEvent":[[4,4,1,"","name"]],"TikTokLive.types.events.DisconnectEvent":[[4,4,1,"","name"]],"TikTokLive.types.events.FollowEvent":[[4,4,1,"","displayType"],[4,4,1,"","label"],[4,4,1,"","name"],[4,4,1,"","user"]],"TikTokLive.types.events.GiftEvent":[[4,4,1,"","gift"],[4,4,1,"","name"],[4,4,1,"","user"]],"TikTokLive.types.events.JoinEvent":[[4,4,1,"","displayType"],[4,4,1,"","label"],[4,4,1,"","name"],[4,4,1,"","user"]],"TikTokLive.types.events.LikeEvent":[[4,4,1,"","displayType"],[4,4,1,"","label"],[4,4,1,"","likeCount"],[4,4,1,"","name"],[4,4,1,"","totalLikeCount"],[4,4,1,"","user"]],"TikTokLive.types.events.LiveEndEvent":[[4,4,1,"","name"]],"TikTokLive.types.events.QuestionEvent":[[4,4,1,"","name"],[4,4,1,"","questionText"],[4,4,1,"","user"]],"TikTokLive.types.events.ShareEvent":[[4,4,1,"","displayType"],[4,4,1,"","label"],[4,4,1,"","name"],[4,4,1,"","user"]],"TikTokLive.types.events.UnknownEvent":[[4,4,1,"","name"]],"TikTokLive.types.events.ViewerCountUpdateEvent":[[4,4,1,"","name"],[4,4,1,"","viewerCount"]],"TikTokLive.types.objects":[[4,1,1,"","AbstractObject"],[4,1,1,"","Avatar"],[4,1,1,"","Badge"],[4,1,1,"","BadgeContainer"],[4,1,1,"","ExtendedGift"],[4,1,1,"","ExtraAttributes"],[4,1,1,"","Gift"],[4,1,1,"","GiftDetailImage"],[4,1,1,"","GiftDetails"],[4,1,1,"","GiftExtra"],[4,1,1,"","GiftIcon"],[4,1,1,"","User"]],"TikTokLive.types.objects.Avatar":[[4,3,1,"","avatar_url"],[4,4,1,"","urls"]],"TikTokLive.types.objects.Badge":[[4,4,1,"","name"],[4,4,1,"","type"]],"TikTokLive.types.objects.BadgeContainer":[[4,4,1,"","badges"]],"TikTokLive.types.objects.ExtendedGift":[[4,4,1,"","describe"],[4,4,1,"","diamond_count"],[4,4,1,"","duration"],[4,4,1,"","event_name"],[4,4,1,"","icon"],[4,4,1,"","id"],[4,4,1,"","image"],[4,4,1,"","is_broadcast_gift"],[4,4,1,"","is_displayed_on_panel"],[4,4,1,"","is_effect_befview"],[4,4,1,"","is_gray"],[4,4,1,"","is_random_gift"],[4,4,1,"","name"],[4,4,1,"","notify"],[4,4,1,"","type"]],"TikTokLive.types.objects.ExtraAttributes":[[4,4,1,"","followRole"]],"TikTokLive.types.objects.Gift":[[4,4,1,"","extended_gift"],[4,4,1,"","giftDetails"],[4,4,1,"","giftExtra"],[4,4,1,"","giftId"],[4,3,1,"","gift_type"],[4,4,1,"","repeatCount"],[4,4,1,"","repeatEnd"],[4,3,1,"","repeat_count"],[4,3,1,"","repeat_end"],[4,3,1,"","streakable"],[4,3,1,"","streaking"]],"TikTokLive.types.objects.GiftDetailImage":[[4,4,1,"","giftPictureUrl"]],"TikTokLive.types.objects.GiftDetails":[[4,4,1,"","describe"],[4,4,1,"","diamondCount"],[4,4,1,"","giftImage"],[4,4,1,"","giftName"],[4,4,1,"","giftType"]],"TikTokLive.types.objects.GiftExtra":[[4,4,1,"","receiverUserId"],[4,4,1,"","timestamp"]],"TikTokLive.types.objects.GiftIcon":[[4,4,1,"","avg_color"],[4,4,1,"","is_animated"],[4,4,1,"","uri"],[4,4,1,"","url_list"]],"TikTokLive.types.objects.User":[[4,4,1,"","badge"],[4,4,1,"","extraAttributes"],[4,3,1,"","is_following"],[4,3,1,"","is_friend"],[4,3,1,"","is_moderator"],[4,4,1,"","nickname"],[4,4,1,"","profilePicture"],[4,4,1,"","uniqueId"],[4,4,1,"","userId"]],"TikTokLive.utils":[[1,5,1,"","get_room_id_from_main_page_html"],[1,5,1,"","validate_and_normalize_unique_id"]],TikTokLive:[[2,0,0,"-","client"],[3,0,0,"-","proto"],[4,0,0,"-","types"],[1,0,0,"-","utils"]]},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","property","Python property"],"4":["py","attribute","Python attribute"],"5":["py","function","Python function"],"6":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:property","4":"py:attribute","5":"py:function","6":"py:exception"},terms:{"0":[2,5],"1":[2,4,5],"10":2,"1000":[2,5],"1152":2,"12":2,"180800":2,"1988":2,"2":2,"2022":4,"2048":2,"3":2,"30":5,"36":2,"420":2,"4692":2,"5":2,"537":2,"69":2,"8":4,"9":2,"97":2,"99":2,"abstract":4,"byte":3,"class":[2,3,4],"default":5,"do":5,"enum":2,"function":5,"import":[4,5],"int":[2,4],"long":[2,5],"new":[0,5],"public":5,"return":[1,2,3,4,5],"true":[2,4,5],"try":[4,5],"while":[2,5],A:[3,4,5],As:5,For:[1,5],If:[1,2,5],It:5,No:5,The:[1,2,3,4,5],Their:2,Then:5,There:5,To:5,_:5,__main__:5,__name__:5,_as_dict:3,_build:0,_log_error:5,abil:5,about:[4,5],abov:5,abstractev:[4,5],abstracteventloop:2,abstractobject:4,accept:2,access:5,activ:5,ad:5,add:[0,2,5],add_listen:5,add_proxi:[2,5],after:5,ag:2,again:5,agent:2,aid:2,aiohttp:5,alia:4,aliv:2,all:[2,5],allow:5,alreadi:[2,4],alreadyconnect:4,also:5,altern:5,amelio:4,an:[2,4,5],ani:[3,4],anim:4,anoth:5,api:[2,5],apidoc:0,app_nam:2,applewebkit:2,appli:5,applic:2,april:4,ar:[1,2,4,5],arriv:5,as_dict:[4,5],ask:4,async:[2,5],asynchron:[2,5],asyncio:[2,5],asyncioeventemitt:2,attempt:[4,5],attribut:[3,4,5],audienc:2,autodoc:0,automat:[3,5],avail:[2,5],available_gift:[2,5],avatar:4,avatar_url:4,avg_color:4,avoid:5,await:5,backward:4,badg:4,badgecontain:4,base:[1,4,6],basecli:2,befor:[2,5],being:[2,5],berlin:2,bit:5,block:[1,2,5],bool:[2,4],broadcast:5,browser_languag:2,browser_nam:2,browser_onlin:2,browser_platform:2,browser_vers:2,bui:5,cach:[2,5],call:5,callabl:5,callback:5,can:[4,5],cannot:5,capabl:5,cd:0,chang:5,channel:5,charli:4,charlidamelio:4,chat:[2,4,5],chatmessagerepeat:4,chatmessagesendfailur:4,chrome:2,click:5,client:[1,4,5,6],client_param:[2,5],code:5,com:[2,5],come:5,comfort:5,command:[0,5],comment:4,commentev:[4,5],compat:4,complet:0,config:3,configur:5,connect:[2,4],connectev:[4,5],connector:5,consecut:2,consol:5,contain:[2,3,4,5],content:6,contribut:5,control:2,convert:1,cookie_en:2,copi:4,core:3,cost:5,could:5,count:[2,4,5],creat:5,creator:[1,5],credenti:5,currenc:4,current:[2,4,5],cursor:2,custom:5,d:4,dacit:3,data:[2,3,4,5],data_class:3,dataclass:3,david:5,davidteath:5,debug:[2,5],decod:[2,5],decor:5,def:5,default_client_param:2,default_request_head:2,defin:[2,5],deflat:2,depend:5,describ:4,descript:5,deseri:[2,3],deserialize_messag:3,detail:[4,5],develop:5,device_platform:2,diamond:4,diamond_count:4,diamondcount:4,dict:[2,3,4,5],dictionari:[2,3,4],did_rul:2,disabl:5,disconnect:4,disconnectev:[4,5],discord:5,displaytyp:4,doc:0,document:5,doe:[4,5],don:2,durat:4,dure:5,e:4,easi:5,either:5,elif:5,els:5,emit:2,en:[2,5],enabl:[2,5],enable_extended_gift_info:[2,5],encod:2,encompass:5,encount:4,end:[4,5],engin:5,enough:5,environ:5,error:[1,6],establish:5,etc:[2,5],europ:2,even:5,event:[1,2,6],event_nam:[4,5],ever:5,everi:5,everyth:5,exampl:[1,5],except:[4,5],excit:5,exist:4,expir:4,ext:0,extend:[4,5],extended_gift:[4,5],extendedgift:[2,4],extra:[4,5],extraattribut:4,f:5,factori:4,fail:[1,4,5],failedconnect:4,failedfetchgift:4,failedfetchroominfo:4,failedhttprequest:4,failedroompol:4,fals:[2,4,5],featur:5,feel:5,fetch:[2,4,5],fetch_room_info_on_connect:[2,5],fetch_rul:2,file:[0,5],find:5,fire:[4,5],first:5,fit:3,fix:5,folder:[0,5],follow:4,followev:[4,5],followrol:4,forc:0,format:[1,2],free:5,frequent:5,friend:4,from:[1,2,3,4,5],from_dict_plu:3,full:5,g:4,gecko:2,gener:[0,4],get:[1,2],get_deserialized_object_from_webcast_api:2,get_json_object_from_webcast_api:2,get_livestream_page_html:2,get_proxi:[2,5],get_room_id_from_main_page_html:1,gg:5,gift:[2,4],gift_typ:[4,5],giftdetail:4,giftdetailimag:4,giftev:[4,5],giftextra:4,gifticon:4,giftid:4,giftimag:4,giftnam:4,giftpictureurl:4,gifttyp:4,github:5,given:[2,4],gleam:5,guid:5,gzip:2,h8m3c6jsf4:5,ha:[4,5],handl:[4,5],handler:5,have:[4,5],header:[2,5],here:5,highest:4,host:[1,5],hous:4,html:[0,1,2],http:[1,4,5,6],i:[4,5],icon:4,id:[1,2,4,5],idea:5,ident:2,imag:[4,5],implement:5,includ:[4,5],increas:5,index:2,individu:5,info:[2,4,5],inform:[2,4,5],initi:5,instal:5,instanti:5,intern:[4,5],internal_ext:2,interv:5,introduct:5,invalidsessionid:4,is_anim:4,is_broadcast_gift:4,is_displayed_on_panel:4,is_effect_befview:4,is_follow:4,is_friend:4,is_grai:4,is_moder:4,is_random_gift:4,isaac:5,isaackogan:5,isaackogz:5,isinst:5,isn:5,item:4,its:[4,5],javascript:5,join:4,joinev:[4,5],json:2,just:5,keep:2,khtml:2,kogan:5,kwarg:5,label:4,lang:[2,5],languag:[2,5],last:[4,5],last_rtt:2,less:5,librari:4,life:5,like:[2,4],likecount:4,likeev:[4,5],limit:5,line:5,list:[2,4,5],listen:5,littl:5,live:[2,5],live_end:4,live_id:2,liveendev:[4,5],livenotfound:4,livestream:[2,4,5],load:3,log:5,loop:[2,5],lotta:4,made:5,magic:5,main:[2,5],main_page_html:1,maintain:5,make:[0,2,5],manual:5,max:2,md:5,mean:5,meant:5,messag:[2,3,4,5],method:2,miss:[4,5],mit:5,mode:2,moder:4,modul:[5,6],more:5,mostli:5,move:0,mozilla:2,much:5,multi:4,multithread:5,my:5,name:[3,4,5],need:2,nest:5,nicknam:[4,5],nojekyl:0,non:5,none:[2,3,5],normal:1,note:5,notic:5,notifi:4,nt:2,number:[2,4],o:0,obj:3,object:[1,2,3,5,6],occur:5,off:5,offici:5,officialgeilegisela:5,offlin:[4,5],old:5,oldskoldj:5,on_com:5,on_connect:5,on_disconnect:5,on_follow:5,on_gift:5,on_join:5,on_lik:5,on_shar:5,onc:5,one:[2,5],onli:5,option:[2,3,4],origin:2,other:[4,5],otherwis:[4,5],over:[4,5],own:5,packag:[5,6],page:[1,2,5],param:2,paramet:[2,3,5],particip:5,pass:5,path:2,payload:[4,5],peopl:[4,5],person:5,pin:2,pip:5,plai:5,poll:[2,4,5],polling_interval_m:[2,5],post:2,post_json_to_webcast_api:2,pre:5,present:[2,5],prevent:5,primari:5,printer:5,priority_region:2,probabl:1,process:5,process_initial_data:[2,5],profilepictur:4,program:5,project:5,properti:[2,4,5],proto:[0,1,2,5,6],proto_nam:3,protobuf:[2,3],provid:5,proxi:[1,5,6],proxy_contain:[2,5],proxycontain:[2,5],pull:[2,5],push:5,py:0,pyee:2,python:5,q:[2,4],qualiti:4,question:[4,5],questionev:4,questiontext:4,rais:[2,4],random:2,randomli:2,rate:5,raw:[4,5],read:5,readm:5,real:5,receiv:[4,5],receiveruserid:4,recent:5,recipi:4,recommend:5,reconnect:5,refer:2,region:2,releas:5,remov:[2,5],remove_proxi:[2,5],renam:0,repeat:4,repeat_count:[4,5],repeat_end:[4,5],repeatcount:4,repeatend:4,repetit:4,request:[2,4,5],requir:5,research:5,resourc:5,resp_content_typ:2,respons:[2,5],result:[2,5],retriev:[2,5],retrieve_available_gift:[2,5],retrieve_room_info:[2,5],revers:5,room:[1,2,4,5],room_id:[2,5],room_info:[2,5],root:0,rotat:2,rotationset:2,run:[2,5],runtimeerror:4,s:[1,2,4,5],safari:2,sampl:5,schema:[2,3],screen_height:2,screen_width:2,second:5,see:5,send:[2,4,5],send_messag:2,sent:[4,5],serv:5,servic:5,session:[2,4],session_id:2,set:[2,3,5],set_en:2,set_pin:2,set_proxies_en:[2,5],set_unpin:2,share:4,shareev:[4,5],should:5,signal:5,size:4,so:5,some:5,someon:[4,5],somerandomerror:5,sound:5,specif:[2,4,5],specifi:5,speech:5,sphinx:0,start:2,state:5,statu:[2,4,5],stop:[2,5],str:[1,2,3,4],streak:[4,5],streakabl:[4,5],stream:[4,5],streamer:[2,4,5],string:2,strong:5,submodul:[5,6],subpackag:[5,6],subscript:5,success:2,successfulli:5,succinct:5,suppli:[2,4,5],support:5,sync:5,system:2,t:[2,3,5],take:[1,5],teather:5,termin:5,text:[2,4,5],than:5,thei:4,them:1,therefor:5,thi:[1,5],think:4,thread:[2,5],through:5,thumbnail:5,ticket:5,tiktok:[1,2,4,5],tiktok_http_origin:2,tiktok_schema_pb2:0,tiktok_url_web:2,tiktok_url_webcast:2,tiktok_web:2,tiktokhttpcli:2,tiktokl:0,tiktoklivecli:[2,5],tiktokprint:5,time:[4,5],timeout:5,timeout_m:[2,5],timeouterror:2,timestamp:4,total:4,totallikecount:4,tree:5,trend:5,trigger:5,trust:5,trust_env:[2,5],turn:5,twice:5,two:5,type:[1,2,3,5,6],tz_name:2,unconnect:5,under:5,understand:5,union:2,uniqu:[2,5],unique_id:[1,2,5],uniqueid:[4,5],unknown:4,unknownev:[4,5],unlik:5,until:5,up:5,updat:[4,5],uri:4,url:[2,4,5],url_list:4,urlencod:2,us:[1,2,5],usag:[2,5],user:[2,4,5],userid:4,usernam:5,utf:4,util:[5,6],valid:5,validate_and_normalize_unique_id:1,valu:[2,4,5],valueerror:2,variabl:5,variou:4,ve:2,veri:[4,5],version:1,version_cod:2,via:5,view:[4,5],viewcount:5,viewer:[2,4,5],viewer_count:2,viewer_count_upd:4,viewercount:4,viewercountupdateev:[4,5],virtual:5,visit:5,vpn:1,wa:[2,4],wai:5,wait:5,want:[2,5],warn:5,warp:5,watch:4,web:2,webcast:[2,5],well:5,what:5,whatev:2,when:[4,5],whenev:4,whether:[2,4,5],which:5,whilst:4,who:[4,5],whole:4,win32:2,win64:2,window:2,without:[2,5],work:5,wrapper:5,www:[2,5],x64:2,x:5,ye:5,yet:5,you:[1,2,4,5],your:5,youtub:5,zerodi:5,zerodytrash:5},titles:["How To Build","TikTokLive package","TikTokLive.client package","TikTokLive.proto package","TikTokLive.types package","TikTokLive Docs","TikTokLive"],titleterms:{To:0,base:2,build:0,client:2,comment:5,connect:5,content:[1,2,3,4,5],contributor:5,disconnect:5,doc:5,error:[4,5],event:[4,5],follow:5,get:5,gift:5,how:[0,5],http:2,intro:5,join:5,librari:5,licens:5,like:5,live_end:5,method:5,modul:[1,2,3,4],object:4,option:5,packag:[1,2,3,4],param:5,print:5,proto:3,proxi:2,purchas:5,share:5,start:5,submodul:[1,2,3,4],subpackag:1,tabl:5,thermal:5,tiktokl:[1,2,3,4,5,6],tutori:5,type:4,unknown:5,util:[1,3],viewer_count_upd:5}})