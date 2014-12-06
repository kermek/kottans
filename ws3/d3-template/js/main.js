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
  var sortedData = _(massageData)
    .map(function (item) {
      item.total = parseInt(item.total, 10);
      return item;
    })
    .sortBy(function (item) {
      return - item.total;
    })
    .value();

  var margins = {
    top: 40,
    right: 40,
    bottom: 40,
    left: 40
  };
  var h = 300 - margins.top - margins.bottom;
  var w = 650 - margins.left - margins.right;
  var bars = 10;
  var svg = d3.select('#ChartArea')
    .append('svg')
    .attr('width', w + margins.left + margins.right)
    .attr('height', h + margins.top + margins.bottom)
    .append('g')
    .attr('transform', 'translate(' + 
      margins.left + ',' +
      margins.top + ')');

svg.append('g')
   .attr('class', 'axis x-axis');

svg.append('g')
   .attr('class', 'axis y-axis');

// svg.append('g')
//   .attr('class', 'axis')
//   .attr('transform', 'translate(0, ' + h + ')')
//   .call(xAxis);

// svg.append('g')
//   .attr('class', 'axis')
//   .call(yAxis);

var currentOffset = 0;
var top10 = sortedData.slice(currentOffset, bars);
displayData(top10);
function displayData(data) {
    var maxY = d3.max(data, function (d) {
      return d.total;
    });
    var yScale = d3.scale.linear()
                   .domain([0, maxY * 1.05])
                   .range([h, 0]);

    var xScale = d3.scale.ordinal()
                         .domain(data.map(function (d) {
                            return d.id;
                         }))
                         .rangeBands([0, w], 0.01);

    var xAxis = d3.svg.axis()
                      .scale(xScale)
                      .orient('bottom');

    var yAxis = d3.svg.axis()
                      .scale(yScale)
                      .ticks(5)
                      .orient('left');

    var cScale = d3.scale.linear()
                             .domain([0, maxY])
                             .range(['#face3d', 'red']);

    var dataSelection = svg
      .selectAll('rect')
      .data(data);

    dataSelection.exit().remove();

    dataSelection.enter().append('rect');

    dataSelection
      .style('fill', function (d, i) {
        return cScale(d.total);
      })
      .attr('width', xScale.rangeBand())
      .attr('height', function (d, i) {
        return (yScale(0) - yScale(d.total)) + 'px';
      })
      .attr('x', function (d, i) {
        return xScale(d.id);
      })
      .attr('y', function (d, i) {
        return yScale(d.total);
      })
      .on('mouseenter', function (d, i) {
        d3.select(d3.event.target)
          .attr('class', 'special');
      })
      .on('mouseleave', function (d, i) {
        d3.select(d3.event.target)
          .attr('class', '');
      });
    svg.select('g.x-axis')
       .attr('transform', 'translate(0, ' + h + ')')
       .call(xAxis);
    svg.select('g.y-axis')
       //.attr('transform', 'translate(0, ' + h + ')')
       .call(yAxis);
  }

  d3.selectAll('.arrow')
    .on('click', function () {
      var direction = d3.event.target 
        .className.split(' ').splice(-1)[0];
      console.log(direction);
      if (direction === 'right') {
        currentOffset = (currentOffset + 1) % (sortedData.length - bars);
        dataToDisplay = sortedData.slice(currentOffset, currentOffset + bars);
        displayData(dataToDisplay);
      } else if (direction === 'left') {
        currentOffset = (currentOffset + sortedData.length - bars - 1) % 
                        (sortedData.length - bars);
        dataToDisplay = sortedData.slice(currentOffset, currentOffset + bars);
        console.log(currentOffset);
        displayData(dataToDisplay);
      } else {
        console.log('No action');
      }
    });
});