import "./App.css";
import Props from "./Props/Props";
import { dataProps } from "./Props/data";
import { useState } from "react";
import { Modal, Button } from "antd";
import "antd/dist/antd.css";
import ModalGIoHang from "./Props/Components/ModalGIoHang";
import BaiTapGioHang from "./BaiTapGioHang/BaiTapGioHang";
function App() {
  //return <BaiTapGioHang />;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [gioHang, setGioHang] = useState([]);
  const [soLuong, setSoLuong] = useState([]);

  const showModal = () => {
    setIsModalVisible(true);
  };
  // soluong[index].soluong++
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const chonMua = (_item) => {
    let cloneGioHang = [...gioHang];
    let cloneSoLuong = [...soLuong];

    let idListSanPham = gioHang.map((dt) => dt.id);
    if (!idListSanPham.includes(_item.id)) {
      cloneGioHang.push(_item);
      cloneSoLuong.push({ [_item.id]: 1 });
      setGioHang(cloneGioHang);
      setSoLuong(cloneSoLuong);
      console.log(cloneSoLuong);
    } else {
      console.log("Tăng Số Lượng");
      let viTri = cloneSoLuong.findIndex((item) => item[_item.id]);
      cloneSoLuong[viTri][_item.id]++;
      setSoLuong(cloneSoLuong);
      console.log(timSoLuongTuId(_item.id, cloneSoLuong));
    }
  };

  const timSoLuongTuId = (_id, _soLuong) => {
    let viTri = _soLuong.findIndex((item) => item[_id]);
    return _soLuong[viTri][_id];
  };

  const tangSoLuong = (_id, _soluong) => {
    let viTri = _soluong.findIndex((item) => item[_id]);
    _soluong[viTri][_id]++;
    setSoLuong(_soluong);

    console.log(_soluong[viTri][_id]);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Giỏ Hàng :<span className="px-2"> {gioHang.length} </span> sản phẩm
      </Button>
      <div className="App container row mx-auto">
        <Props dsDt={dataProps} onChonMua={chonMua} />
      </div>

      <Modal
        title="Giỏ Hàng Của Bạn"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1000}
      >
        <table className="table">
          <thead>
            <tr>
              <th scope="col"> Ảnh</th>
              <th scope="col"> Sản Phẩm</th>
              <th scope="col">Giá tiền</th>
              <th scope="col">Số lượng</th>
            </tr>
          </thead>
          <tbody>
            {gioHang?.map((dienThoai) => {
              return (
                <tr>
                  <td>
                    <img
                      src={dienThoai.thumbnail_url}
                      className=""
                      alt="..."
                      style={{ width: "50%" }}
                    />
                  </td>
                  <td>{dienThoai.name}</td>
                  <td>{dienThoai.price.toLocaleString()}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-primary btn-sm mr-1"
                    >
                      -
                    </button>
                    {timSoLuongTuId(dienThoai.id, soLuong)}
                    <button
                      type="button"
                      className="btn btn-primary btn-sm ml-1"
                      onClick={() => {
                        tangSoLuong(dienThoai.id, soLuong);
                      }}
                    >
                      +
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Modal>
    </>
  );
}

export default App;
