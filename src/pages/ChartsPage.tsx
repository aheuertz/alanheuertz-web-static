import React, { ReactElement } from "react";
import Container from "reactstrap/lib/Container";
import Row from "reactstrap/lib/Row";
import Col from "reactstrap/lib/Col";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, BarChart, Bar, Tooltip, ResponsiveContainer, PieChart, Pie, RadarChart, Radar, PolarGrid, PolarAngleAxis, Legend, ScatterChart, ZAxis, Scatter } from "recharts";
import Card from "reactstrap/lib/Card";
import CardBody from "reactstrap/lib/CardBody";
import CardHeader from "reactstrap/lib/CardHeader";
import Alert from "reactstrap/lib/Alert";

interface ChartCard {
  title: string;
  chart: ReactElement<any>;
}

function randomIntegerBetween(from: number, to: number) {
  return Math.ceil((Math.random() * (to - from)) + from);
}

interface ScatterPlotPoint {
  x: number;
  y: number;
  z: number;
}

function randomizeScatterData(): ScatterPlotPoint[] {
  return [...new Array(10)]
    .map(_ => ({x: randomIntegerBetween(1, 20), y: randomIntegerBetween(1, 20), z: randomIntegerBetween(1, 500)}))
    .sort((left: ScatterPlotPoint, right: ScatterPlotPoint) => {
      if (left.x > right.x) return 1;
      if (left.x < right.x) return -1;
      return 0;
    });
}

const scatterData1 = randomizeScatterData();
const scatterData2 = randomizeScatterData();

export const ChartsPage = () => {
  const data = [
    {value: 20, name: "First"},
    {value: 22, name: "Second"},
    {value: 19, name: "Third"},
    {value: 25, name: "Fourth"},
    {value: 28, name: "Fifth"},
    {value: 33, name: "Sixth"},
  ];

  const characterStats = [
    {Hero: 10, Villain: 8, name: "Strength"},
    {Hero: 8, Villain: 9, name: "Attack"},
    {Hero: 10, Villain: 6, name: "Defense"},
    {Hero: 13, Villain: 4, name: "Agility"},
    {Hero: 10, Villain: 12, name: "Stealth"},
    {Hero: 13, Villain: 15, name: "Intelligence"},
    {Hero: 9, Villain: 14, name: "Magic"},
  ];

  const columnWidth = {
    xl: 4,
    lg: undefined,
    md: 6,
  };

  const chartCards: ChartCard[] = [
    {
      title: "Line Chart",
      chart: (
        <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
          <Line type="monotone" dataKey="value" stroke="#ff0000" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
        </LineChart>
      )
    }, {
      title: "Bar Chart",
      chart: (
        <BarChart data={data}>
          <CartesianGrid stroke="#ccc" />
          <Tooltip />
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      )
    }, {
      title: "Pie Chart",
      chart: (
        <PieChart>
          <Pie data={data} dataKey="value" fill="#82ca9d" label />
          <Tooltip />
        </PieChart>
      )
    }, {
      title: "Radar Chart",
      chart: (
        <RadarChart data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="name" />
          {/* <PolarRadiusAxis angle={30} domain={[0, 150]} /> */}
          <Radar dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          <Legend />
        </RadarChart>
      )
    }, {
      title: "Character Stats",
      chart: (
        <RadarChart data={characterStats}>
          <PolarGrid />
          <PolarAngleAxis dataKey="name" />
          {/* <PolarRadiusAxis angle={30} domain={[0, 150]} /> */}
          <Radar dataKey="Hero" stroke="#8884d8" fill="#bb0000" fillOpacity={0.6} />
          <Radar dataKey="Villain" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          <Legend />
          <Tooltip />
        </RadarChart>
      )
    }, {
      title: "Scatter Plot",
      chart: (
        <ScatterChart>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="x" name="stature" unit="cm" />
          <YAxis dataKey="y" name="weight" unit="kg" />
          <ZAxis dataKey="z" range={[1, 500]} name="score" unit="km" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Legend />
          <Scatter name="A school" data={scatterData1} fill="#8884d8" />
          <Scatter name="B school" data={scatterData2} fill="#82ca9d" />
        </ScatterChart>
      )
    }
  ]

  return (
    <>
      <Container fluid>
        <Alert color="warning">The following charts aren't meant to convey anything. They're built with random data using the recharts library.</Alert>
        <Row className="equal">
          {chartCards.map((chartCard: ChartCard, index: number) => (
            <Col key={index} xl={columnWidth.xl} lg={columnWidth.lg} md={columnWidth.md} className="my-2">
              <Card>
                <CardHeader>{chartCard.title}</CardHeader>
                <CardBody>
                  <ResponsiveContainer width="100%" height={300}>
                    {chartCard.chart}
                  </ResponsiveContainer>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}
