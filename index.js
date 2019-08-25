Array.prototype.diff = function(arr2) {
  var ret = [];
  for(var i in this) {   
    if(arr2.indexOf(this[i]) > -1) {
      ret.push(this[i]);
    }
  } return ret;
};


let f = [{
    "_id": "5d60de4be22188f5b704c55f",
    "groups": [
        "public"
    ],
    "topics": [
        {
            "groups": [
                "cops",
                "copsIA"
            ],
            "_id": "5d60de68e22188f5b704c560",
            "topics": [],
        },
        {
            "groups": [
                "public",
                "copsHR"
            ],
            "_id": "5d611a9e06e0a0fe142e0398",
            "topics": [],
        },
        {
            "groups": [
                "public",
                "gangs"
            ],
            "_id": "5d611ba5360ca9fe677ff94f",,
            "topics": [],
        },
        {
            "groups": [
                "public"
            ],
            "_id": "5d611bcb5bc871fe7e32b931",
            "topics": [],
        },
        {
            "groups": [
                "public"
            ],
            "_id": "5d611c74926082fea4a745df",
            "topics": [],
        },
        {
            "groups": [
                "public"
            ],
            "_id": "5d611ca4ba3b63feae4f37ae",
            "topics": [        {
              "groups": [
                "public",
                "TEST"
              ],
              "_id": "5d611ca4ba3b63feae4f37ae",
              "topics": [],
            }],
        },
    ]
}];

let user = ['public', 'admin', 'cops', 'gangs', 'admin'];


const checkUserPermissions = function(forums, userGroups) {
  if (Object.prototype.toString.call(forums) !== '[object Array]') forums = [forums];
    forums.forEach((forum, index) => {
      let z = forum.groups.diff(userGroups);
      if (z.length != forum.groups.length) delete forums[index];
      else {
        if (forum.topics.length > 0) {
          checkUserPermissions(forum.topics, userGroups);
        }
      }
    });
  return forums;
}

f = checkUserPermissions(f, user);

document.write(JSON.stringify(f));
console.log(JSON.stringify(f));
