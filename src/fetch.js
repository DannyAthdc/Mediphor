function requests(path, method = "GET", data = {}) {
  method = method.toUpperCase();

  // 默认请求头
  let requestHeader = {
    method,
  };

  // 如果是get请求
  if (method === "GET") {
    let esc = encodeURIComponent;
    let queryParams = Object.keys(data)
      .map((k) => `${esc(k)}=${esc(data[k])}`)
      .join("&");
    if (queryParams) {
      path += `?${queryParams}`;
    }
  } else {
    requestHeader.headers = {
      "content-type": "application/json",
    };
    requestHeader.body = JSON.stringify(data);
  }

  return fetch(`${path}`, requestHeader).then((response) => response.json());
}

export let get = (url, data) => {
  return requests(url, "get", data);
};

export let post = (url, data) => {
  return requests(url, "post", data);
};
