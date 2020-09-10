import React from "react";
let dataHargaBuah = [
  { nama: "Semangka", harga: 10000, berat: 1000 },
  { nama: "Anggur", harga: 40000, berat: 500 },
  { nama: "Strawberry", harga: 30000, berat: 400 },
  { nama: "Jeruk", harga: 30000, berat: 1000 },
  { nama: "Mangga", harga: 30000, berat: 500 },
];
class TdNama extends React.Component {
  render() {
    return <td>{this.props.nama}</td>;
  }
}
class TdHarga extends React.Component {
  render() {
    return <td>{this.props.harga}</td>;
  }
}
class TdBerat extends React.Component {
  render() {
    return <td>{this.props.berat / 1000}kg</td>;
  }
}
class DaftarBuah extends React.Component {
  render() {
    return (
      <>
        <h1 style={{ textAlign: "center" }}>Daftar Harga Buah</h1>
        <div class="content">
          <table border={"1px"}>
            <tr class="head">
              <th width={"300px"}>Nama</th>
              <th width={"150px"}>Harga</th>
              <th width={"100px"}>Berat</th>
            </tr>
            {dataHargaBuah.map((el) => {
              return (
                <tr class="body">
                  <TdNama nama={el.nama} />
                  <TdHarga harga={el.harga} />
                  <TdBerat berat={el.berat} />
                </tr>
              );
            })}
          </table>
        </div>
      </>
    );
  }
}

export default DaftarBuah;
