import React from "react";

export default function Modal() {
  return (
    <>
      <button
        type="button"
        class="button"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Join Us
      </button>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                JOIN US
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            {/*  modal body */}
            <div className="modal-body">
              <form>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    required
                    placeholder="Name"
                    autoFocus
                  ></input>
                </div>
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Email"
                    required
                  ></input>
                </div>
                <div class="form-group">
                  <input
                    type="number"
                    class="form-control"
                    placeholder="Contact Number"
                    required
                  ></input>
                </div>

                {/* <button type="submit" class="btn btn-primary">
                  Submit
                </button> */}
              </form>
            </div>

            {/* modal footer */}
            <div class="modal-footer">
              <button type="button" class="button">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
