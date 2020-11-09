// $(document).ready(()=>{
//     var postId1;
//     var blogarr;
//     sessionStorage.setItem('profileid',5);

//     $.ajax({
//         url:"http://localhost:3000/blogdata?id=1",
//         type:"GET",
//         success:(data)=>{
//             console.log(data);
//             postId1=data[0].id;
//             for(var i=0;i<data.length;i++)
//             {
//                 // $('<img src='+data[i].img+'></img>').appendTo("#postid");

//                  $('<h1>'+data[i].title+'</h1>').appendTo("#postid");
//                 // $('<h3> Created At :'+data[i].content+'</h3>').appendTo("#postid");
//                 // $('<h3> Category :'+data[i].password+'</h3>').appendTo("#postid");
//                 // $('<h3> Description :'+data[i].gender+'</h3>').appendTo("#postid");

//             }
//         }
//     });

//     $.ajax({
//         url:"http://localhost:3000/blogdata",
//         type:"GET",
//         success:(data)=>{
//             blogarr=data;
//         }
//     });


//     $.ajax({
//         url: "http://localhost:3000/comments",
//         type:"GET",
//         success:(data)=>{
//             console.log(data)
//             console.log(postId1)
//             console.log(blogarr);

//             for(let i=0;i<data.length;i++)
//             {
//                 if(data[i].postId==postId1)
//                 {
//                     console.log(data[i].userId)
//                     var user_commented_id=data[i].userId;

//                     for(j=0 ;j<blogarr.length;j++)
//                     {
//                         if(user_commented_id==blogarr[j].id)
//                         {
//                             var user_commented_name = blogarr[j].title;
//                             $('<h4 class="new">'+user_commented_name+'</h4>');
//                             $('<p>'+data[i].body+'</p>').appendTo('#commentId');
//                         }
//                     }
//                 }
//             }
//             // $('#btn').click(()=>{
//             //     alert("in my function");

//             //     var body1 = $("#postComment").val();
//             //     var userId1 = Number(sessionStorage.getItem('profileid'));
//             //     console.log(typeof(userId1))
//             //     console.log(body1)
//             //     console.log(userId1)

//             //     $.ajax({
//             //         url:"http://localhost:3000/comments",
//             //         type:"POST",
//             //         data:JSON.stringify({
//             //             body: body1,
//             //           postId: Number(postId1),
//             //         userId: userId1,
//             //         }),
//             //         contentType:"application/json; charset=utf-8",
//             //         dataType:"json",
//             //         async:false,
//             //         success:function(msg){
//             //             console.log("new post added successfully");
//             //         },
//             //     })
//             // })
//         }

//     })

// });