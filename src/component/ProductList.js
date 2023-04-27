import { useEffect, useState } from 'react';

const ProductList = () => {
  const [list, setList] = useState([]);
  const [page, setPage] = useState([]);
  const [pageSelect, setPageSelect] = useState(1);
  const [search, setSearch] = useState('');
  const [value, setValue] = useState('');
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((item) => {
        setPage(new Array(Math.ceil(item.limit / 8)).fill(0));
        setList(item?.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    let timer = setTimeout(() => {
      setSearch(value);
      setPageSelect(1);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [value]);

  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <input
            className="form-control"
            placeholder="Search Product"
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <br />
        </div>
        {list
          .filter((res) => res?.title.toLowerCase().includes(search.toLowerCase()))
          .slice((pageSelect - 1) * 8, pageSelect * 8)
          ?.map((product, index) => 
            <div className="col-md-3" key={index}>
              <div className="card">
                <img className="card-img-top" src={product?.thumbnail} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">{product?.title}</h5>
                  <p className="card-text">{product?.description}</p>
                  <p>${product?.price}</p>
                </div>
              </div>
            </div>
          )}
      </div>
      <br />

      <div className="btn-group" role="group" aria-label="First group">
        {page?.map((res, index) => (
          <button
            type="button"
            className={
              pageSelect == index + 1
                ? 'btn btn-outline-secondary active'
                : 'btn btn-outline-secondary'
            }
            onClick={() => {
              setPageSelect(index + 1);
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </>
  );
};

export default ProductList;
