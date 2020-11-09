$('document').ready(()=>{
    

    
    var getData = localStorage.getItem("readData");
    console.log(getData);
    var parsedData = JSON.parse(getData);
    console.log(parsedData.data);
    localStorage.removeItem("readData");
    $("newwindow").append(getData);
    let para = document.createElement('div');
    let titleHeading = document.createElement('h1');
    let contentDiv = document.createElement('p');
    let breakLine = document.createElement('br');
    let authorHeading = document.createElement('h4');
    let image = document.createElement('img');
    titleHeading.innerText = parsedData.title;
    authorHeading.innerText = "Written By : " + parsedData.author;
    contentDiv.innerHTML = parsedData.Content;
    let postedTime = document.createElement('p');
    postedTime.innerText="Posted on :" + parsedData.timestamp;
    let verticalSpace = document.createElement('hr');
    // image.className="rounded mx-auto d-block";
    image.src = parsedData.imageurl;
    para.append(titleHeading);
    para.append(breakLine);
    para.append(authorHeading);
    para.append(postedTime);
    para.append(verticalSpace);
    para.append(breakLine);
    para.append(image);
    para.append(contentDiv);
    para.append(breakLine);
    $("#newwindow").append(para);
    
    //Logic for Comments

    // var postId1;
    // var Userarr;
    // sessionStorage.setItem('BlogId',5);
    

    
   
//    alert("hello")

///to get the post
    // $.ajax({
    //     url:"http://localhost:3000/posts?id=1",
    //     type:"GET",
    //     success:(data)=>{
    //         console.log(data);
    //         postId1=data[0].id;
    //         // console.log(postId)
    //         for(var i=0;i<data.length;i++)
    //         {
    //             $('<img src='+data[i].img+'></img>').appendTo("#postid");

    //             $('<h1>'+data[i].title+'</h1>').appendTo("#postid");
    //             $('<h3> Created At :'+data[i].date+'</h3>').appendTo("#postid");
    //             $('<h3> Category :'+data[i].category+'</h3>').appendTo("#postid");
    //             $('<h3> Description :'+data[i].description+'</h3>').appendTo("#postid");

    //         }
    //     }
    // });


    // to get userdata
    // $.ajax({
    //     url:"http://localhost:3000/User",
    //     type:"GET",
    //     success:(data)=>{
           
    //         Userarr=data;
    //         // console.log(Userarr)
    //     }
    // });


    
    // $.ajax({
    //     url:"http://localhost:3000/comments",
    //     type:"GET",
    //     success:(data)=>{
    //         console.log(data)
    //         console.log(postId1)
    //         console.log(Userarr);

    //         for(let i=0;i<data.length;i++)
    //         {

    //             if(data[i].postId==postId1)
    //             {
    //                 console.log(data[i].userId)
    //                 var user_commented_id=data[i].userId;
               
    //                 for(var j=0;j<Userarr.length;j++)
    //                 {
    //                     if(user_commented_id==Userarr[j].id)
    //                     {
    //                         var user_commented_fname=Userarr[j].first_name;
    //                         var user_commented_lname=Userarr[j].last_name;
                        
    //                         $('<h4 class="new">'+user_commented_fname+'  '+user_commented_lname+'</h4>').appendTo("#commentId");
    //                         $('<p>'+data[i].body+'</p>').appendTo("#commentId");
                            

    //                     }
    //                 }
    //             }
    //         }
    //     }
    // });
            // $("#btn").click(()=>{
 

            //     alert("in my function");
               
              
            //     var body1 = $("#postComment").val();
            //     var userId1=Number(sessionStorage.getItem('BlogId'));
            //     console.log(typeof(userId1))
            //     console.log(body1);
            //     console.log(userId1)
            
             
                // $.ajax({
                //   url: "http://localhost:3000/comments",
                //   type: "POST",
                //   data: JSON.stringify({
                //     body: body1,
                //     postId:Number(postId1),
                //     userId:userId1
                   
                //   }),
                //   contentType: "application/json; charset=utf-8",
                //   dataType: "json",
                //   async: false,
                //   success: function (msg) {
                //     console.log("New post Added Successfully");
                //   },
                // });
        //         document.getElementById('commentId').innerText = body1;
                
        //  })
            
        var postId1;
            var blogarr;
            sessionStorage.setItem('profileid',5);

            $.ajax({
                        url:"http://localhost:3000/blogdata?id=1",
                        type:"GET",
                        success:(data)=>{
                           
                            postId1=data[0].id;
                            for(var i=0;i<data.length;i++)
                            {
                                // $('<img src='+data[i].img+'></img>').appendTo("#postid");
                
                                 $('<h1>'+data[i].title+'</h1>').appendTo("#postid");
                                // $('<h3> Created At :'+data[i].content+'</h3>').appendTo("#postid");
                                // $('<h3> Category :'+data[i].password+'</h3>').appendTo("#postid");
                                // $('<h3> Description :'+data[i].gender+'</h3>').appendTo("#postid");
                
                            }
                        }
                    });
                
                    $.ajax({
                        url:"http://localhost:3000/blogdata",
                        type:"GET",
                        success:(data)=>{
                            blogarr=data;
                        }
                    });
                
                
                    $.ajax({
                        url: "http://localhost:3000/comments",
                        type:"GET",
                        success:(data)=>{
                           console.log(data);
                
                            // for(let i=0;i<data.length;i++)
                            // {
                            //     if(data[i].postId==postId1)
                            //     {
                                    
                            //         var user_commented_id=data[i].userId;
                
                            //         for(j=0 ;j<blogarr.length;j++)
                            //         {
                            //             if(user_commented_id==blogarr[j].id)
                            //             {
                            //                 var user_commented_name = blogarr[j].title;
                            //                 $('<h4 class="new">'+user_commented_name+'</h4>').appendTo('#commentId');
                            //                 $('<p>'+data[i].body+'</p>').appendTo('#commentId');
                            //             }
                            //         }
                            //     }
                            // }
                            data.forEach((result,id) => {
                                const container = document.getElementById("commentId");
                                const content = `
                                    <h1>${result.body}</h1>
                                `;
                                container.innerHTML += content;
                            });

                            $('#btn').click(()=>{
                                alert("in my function");
                
                                var body1 = $("#postComment").val();
                                var userId1 =sessionStorage.getItem('profileid');
                              
                
                                $.ajax({
                                    url:"http://localhost:3000/comments",
                                    type:"POST",
                                    data:JSON.stringify({
                                        body: body1,
                                      postId: postId1,
                                    userId: userId1,
                                    }),

                                    contentType:"application/json; charset=utf-8",
                                    dataType:"json",
                                    async:true,
                                    success:function(msg){
                                        console.log("new post added successfully");
                                    },
                                })
                            })
                        }
                    })
                        })