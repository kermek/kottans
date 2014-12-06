d3.json('/dataset.json', function (err, data) {
  if (err) {
    alert(err);
    return 1;
  }
  console.log(data.medals);
  var massageData = _.transform(data.medals, function (result, val, key) {
    result.push(_.assign({id: key}, val[0]));
    return result;
  }, []);
  console.log(massageData);
  var top10 = _(massageData)
    .map(function (item) {
      item.total = parseInt(item.total, 10);
      return item;
    })
    .sortBy(function (item) {
      return - item.total;
    })
    .first(10)
    .value();
  d3.select('body').selectAll('div')
    .data(top10)
    .enter()
    .append('div')
    .text(function (d, i) {
      console.log(d, i);
      return i + '. ' + d.id + ' : ' + d.total;
    });
  console.log(top10);
});