async function main() {
  var data = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  ).then((respose) => respose.json());

  console.log({ data });
  var timeStart = Date.now();
  var commentsList = [];

  function mapOver() {
    var url =
      "https://jsonplaceholder.typicode.com/posts/" + post.id + "/comments";
    return fetch(url).then((res) => res.json()); // returns a promise
  }

  // WHEN AND HOW TO CREATE CUSTOM PROMISE
  //   const promise = new Promise((respose, reject) => {
  //     writeFileSync('path', (err, data) => {
  //         err ? reject(err) : response(data);
  //     });
  //   })
  //   var aaa = await promise()

  var arr = data.map(mapOver);

  //   for(let i = 0; i < data.length; i++) {
  //       var post = data[i]
  //     var url = 'https://jsonplaceholder.typicode.com/posts/' + post.id + '/comments';
  //     var comments = await fetch(url).then(res => res.json()); // 2 sec

  //     commentsList.push(comments)
  //     console.log({comments})
  //   }

  var resolved = await Promise.all(arr);

  var timeEnd = Date.now();
  console.log("Time ellapsed: ", timeEnd - timeStart);

  console.log({ arr });
}

main();
