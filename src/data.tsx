export interface MyObject {
    id:number,
    name:string,
    profilePic:string,
    coverPic:string,
    friends:[
        {
            id:number,
            frname:string,
            profilePic:string
            isFriend:boolean
        },
        {
            id:number,
            frname:string,
            profilePic:string
            isFriend:boolean
        },
        {
            id:number,
            frname:string,
            profilePic:string
            isFriend:boolean
        },
        {
            id:number,
            frname:string,
            profilePic:string
            isFriend:boolean
        }
    ],
    imgPost:{
        URL:string,
        caption:string,
        likes:number,
        dislikes:number,
        comments:[
            {
                userName:string,
                comment:string,
                
            },
            
        ]
    },
    videoPost:{
        URL:string,
        caption:string,
        likes:number,
        dislikes:number,
        comments:[
            {
                userName:string,
                comment:string
            },
        ]
    },
    bio:{
        dis:string,
        location:string,
        College:string
    }
}

export const data:MyObject[]=[
    {
        id:1,
        name:"Vaibhav Bhaskar",
        profilePic:"https://images.unsplash.com/photo-1628563694622-5a76957fd09c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
        coverPic:"https://media.istockphoto.com/id/181888757/photo/an-old-man-covering-his-face-with-his-hands-in-grief.jpg?s=1024x1024&w=is&k=20&c=1PQoRbLxf3nQVIQkR6fMmlCGEfgy7RIJDEnuNQuB3dE=",
        
        friends:[
            {
                id:2,
                frname:"Aman Mourya",
                profilePic:"https://xyzshayari.com/wp-content/uploads/2022/05/hide-face-girl-profile-picture.png",
                isFriend:false
            },
            {
                id:5,
                frname:"Amit Mali",
                profilePic:"https://marketplace.canva.com/EAFSZhFumYM/1/0/1600w/canva-dark-red-neon-futuristic-instagram-profile-picture-MUPA4np8in0.jpg",
                isFriend:false,
            },
            {
                id:3,
                frname:"Somesh Gavali",
        profilePic:"https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        isFriend:false
            },
            {
                id:4,
                frname:"Omkar thube",
        profilePic:"https://1fid.com/wp-content/uploads/2022/07/girl-profile-pic-17-1024x1024.jpg",
   
        isFriend:false
            }
        ],
        imgPost:{
            URL:"https://e1.pxfuel.com/desktop-wallpaper/903/679/desktop-wallpaper-97-aesthetic-best-profile-pic-for-instagram-for-boy-instagram-dp-boys.jpg",
            caption:"",
            likes:20,
            dislikes:2,
            comments:[
                {userName:"eburras1q",comment:"This is some awesome thinking!",},
            ],

        },
         videoPost:{
            URL:'https://player.vimeo.com/progressive_redirect/playback/816018253/rendition/360p/file.mp4?loc=external&oauth2_token_id=57447761&signature=80de3398847e61177a11800b6677364a10d20fb4c77b09f2a49b77b123a706a0',
            caption:"",
            likes:30,
            dislikes:10,
            comments:[
                {userName:"cdavydochkin2o",comment:"You are showing excellent understanding!"},
                
            ],
        },
        bio:{
            dis: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less.",
            location:"pune",
            College:"ABP college",
        }
   
    },
    {
        id:2,
        name:"Aman Mourya",
        profilePic:"https://xyzshayari.com/wp-content/uploads/2022/05/hide-face-girl-profile-picture.png",
        coverPic:"https://wallpaperaccess.com/full/1493766.jpg",
        friends:[
             {
                id:1,
                frname:"Vaibhav Bhaskar",
                profilePic:"https://images.unsplash.com/photo-1628563694622-5a76957fd09c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
                isFriend:false
            },
            {
                id:5,
                frname:"Amit Mali",
                profilePic:"https://marketplace.canva.com/EAFSZhFumYM/1/0/1600w/canva-dark-red-neon-futuristic-instagram-profile-picture-MUPA4np8in0.jpg",
                isFriend:false,
            },
            {
                id:3,
                frname:"Somesh Gavali",
        profilePic:"https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        isFriend:false
            },
            {
                id:4,
                frname:"Omkar thube",
        profilePic:"https://1fid.com/wp-content/uploads/2022/07/girl-profile-pic-17-1024x1024.jpg",
   
        isFriend:false
            }
        ],
        imgPost:{
            URL:"https://e1.pxfuel.com/desktop-wallpaper/903/679/desktop-wallpaper-97-aesthetic-best-profile-pic-for-instagram-for-boy-instagram-dp-boys.jpg",
            caption:"",
            likes:15,
            dislikes:4,
            comments:[
                {userName:"eburras1q",comment:"His mother had always taught him",},
                
            ],
            

        },
         videoPost:{
            URL:'https://player.vimeo.com/external/490789770.sd.mp4?s=d0879a52d088cb4400db97d088ab01ff24acfcd0&profile_id=164&oauth2_token_id=57447761',
            caption:"",
            likes:80,
            dislikes:10,
            comments:[
                {userName:"cdavydochkin2o",comment:"You are showing excellent understanding!"},
                
            ],
        },
        bio:{
            dis:"He was an expert but not in a discipline that anyone could fully appreciate. He knew how to hold the cone just right so that the soft server ice-cream fell into it at the precise angle to form a perfect cone each and every time. It had taken years to perfect and he could now do it without even putting any thought behind it.",
            location:"Mumbai",
            College:" FTC college",
        }
   
    },
    {
        id:3,
        name:"Somesh Gavali",
        profilePic:"https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        coverPic:"https://i.pinimg.com/736x/a8/a7/c6/a8a7c690b75b8121ad2172677d0ef169.jpg",
        friends:[
            {
                id:1,
                frname:"Vaibhav Bhaskar",
            profilePic:"https://images.unsplash.com/photo-1628563694622-5a76957fd09c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
                isFriend:false
            },
            {
                id:5,
                frname:"Amit Mali",
                profilePic:"https://marketplace.canva.com/EAFSZhFumYM/1/0/1600w/canva-dark-red-neon-futuristic-instagram-profile-picture-MUPA4np8in0.jpg",
                isFriend:false,
            },
            {
                id:2,
                frname:"Aman Mourya",
        profilePic:"https://xyzshayari.com/wp-content/uploads/2022/05/hide-face-girl-profile-picture.png",
        isFriend:false
            },
            {
                id:4,
                frname:"Omkar thube",
        profilePic:"https://1fid.com/wp-content/uploads/2022/07/girl-profile-pic-17-1024x1024.jpg",
   
        isFriend:false
            }
        ],
        imgPost:{
            URL:"https://e1.pxfuel.com/desktop-wallpaper/984/299/desktop-wallpaper-stylish-instagram-dp-for-boys-attitude-sad-smart-instagram-dp-boys-thumbnail.jpg",
            caption:"",
            likes:100,
            dislikes:20,
            comments:[
                {userName:"eburras1q",comment:"He was an expert but not in a discipline",},
                
            ],

        },
         videoPost:{
            URL:"https://player.vimeo.com/external/636112105.sd.mp4?s=1831ef17f276f979574dfb0de04ec9dc85d4f67d&profile_id=164&oauth2_token_id=57447761",
            caption:"",
            likes:40,
            dislikes:10,
            comments:[
                {userName:"cdavydochkin2o",comment:"Dave watched as the forest burned up on the hill"},
                
            ],
        },
        bio:{
            dis:"All he wanted was a candy bar. It didn't seem like a difficult request to comprehend, but the clerk remained frozen and didn't seem to want to honor the request. It might have had something to do with the gun pointed at his face.",
            location:"Nashik",
            College:"DY Patil College",
        }
   
    },
    {
        id:4,
        name:"Omkar thube",
        profilePic:"https://1fid.com/wp-content/uploads/2022/07/girl-profile-pic-17-1024x1024.jpg",
        coverPic:"https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80",
        friends:[
            {
                id:2,
                frname:"Aman Mourya",
                profilePic:"https://xyzshayari.com/wp-content/uploads/2022/05/hide-face-girl-profile-picture.png",
                isFriend:false
            },
            {
                id:5,
                frname:"Amit Mali",
                profilePic:"https://marketplace.canva.com/EAFSZhFumYM/1/0/1600w/canva-dark-red-neon-futuristic-instagram-profile-picture-MUPA4np8in0.jpg",
                isFriend:false,
            },
            {
                id:3,
                frname:"Somesh Gavali",
        profilePic:"https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        isFriend:false
            },
            {
                id:1,
                frname:"Vaibhav Bhaskar",
        profilePic:"https://images.unsplash.com/photo-1628563694622-5a76957fd09c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
   
        isFriend:false
            }
        ],
        imgPost:{
            URL:"https://e0.pxfuel.com/wallpapers/492/141/desktop-wallpaper-bumbalugard-on-shadow-best-profile-profile-instagram-devil-boy-thumbnail.jpg",
            caption:"",
            likes:20,
            dislikes:21,
            comments:[
                {userName:"eburras1q",comment:"Dave watched as the forest burned up on the hill",},
                
            ],

        },
         videoPost:{
            URL:"https://player.vimeo.com/progressive_redirect/playback/816018252/rendition/360p/file.mp4?loc=external&oauth2_token_id=57447761&signature=4e4de8d57e762861d1f7c3287fe25c62e81d0b78fe9b14e3bfb728e86277f9fb",
            caption:"",
            likes:90,
            dislikes:10,
            comments:[
                {userName:"cdavydochkin2o",comment:"You are showing excellent understanding!"},
                
            ],
        },
        bio:{
            dis:"This is important to remember. Love isn't like pie. You don't need to divide it among all your friends and loved ones. No matter how much love you give, you can always give more. It doesn't run out, so don't try to hold back giving it as if it may one day run out. Give it freely and as much as you want.",
            location:"Delhi",
            College:" FC college pune",
        }
   
    },
    {
        id:5,
        name:"Amit Mali",
        profilePic:"https://marketplace.canva.com/EAFSZhFumYM/1/0/1600w/canva-dark-red-neon-futuristic-instagram-profile-picture-MUPA4np8in0.jpg",
        coverPic:"https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80",
        friends:[
            {
                id:2,
                frname:"Aman Mourya",
                profilePic:"https://xyzshayari.com/wp-content/uploads/2022/05/hide-face-girl-profile-picture.png",
                isFriend:false
            },
            {
                id:1,
                frname:"Vaibhav Bhaskar",
                profilePic:"https://images.unsplash.com/photo-1628563694622-5a76957fd09c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
                isFriend:false,
            },
            {
                id:3,
                frname:"Somesh Gavali",
        profilePic:"https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        isFriend:false
            },
            {
                id:4,
                frname:"Omkar thube",
        profilePic:"https://1fid.com/wp-content/uploads/2022/07/girl-profile-pic-17-1024x1024.jpg",
   
        isFriend:false
            }
        ],
        imgPost:{
            URL:"https://wallpapers.com/images/hd/instagram-profile-pictures-lbh55gjiye85bn0w.jpg",
            caption:"",
            likes:50,
            dislikes:2,
            comments:[
                {userName:"eburras1q",comment:"This is some awesome thinking!",},
                
            ],
        },
         videoPost:{
            URL:"https://youtu.be/nBZlrbrBO1I",
            caption:"",
            likes:0,
            dislikes:0,
            comments:[
                {userName:"cdavydochkin2o",comment:"You are showing excellent understanding!"},
                
            ],
        },
        bio:{
            dis:"One can cook on and with an open fire. These are some of the ways to cook with fire outside. Cooking meat using a spit is a great way to evenly cook meat. In order to keep meat from burning, it's best to slowly rotate it.",
            location:"Vijayapur",
            College:"SK college",
        }
   
    }
]

