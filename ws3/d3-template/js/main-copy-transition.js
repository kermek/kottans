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
    .attr('class', function (d, i) {
      return (i % 2) == 0 ? 'bar' : 'bar special';
    })
    .html(function (d, i) {
      return d.id + '<br/>' + d.total;
    })
    .style('height', '0px')
    .transition()
    .duration(5000)
    .style('height', function (d, i) {
      return d.total * 2 + 'px';
    });

  console.log(top10);
});