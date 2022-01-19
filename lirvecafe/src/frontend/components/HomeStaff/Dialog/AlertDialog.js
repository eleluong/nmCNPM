import * as React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import styles from './AlertDialog.module.css'
export default function AlertDialog({ setOpen, remove, data }) {

  const handleClose = () => {
    setOpen(false);
  };
  const handlDelete = () => {
    setOpen(false);
    remove(data);
  }
  return (
    <div>
      <div className={styles.main}>
        <div className={styles.dialog}>
          <div className={styles.title}>
            Bạn có thực sự muốn xóa?
          </div>
          <div className={styles.btn_list}>
            <button className={styles.btn_confirm} onClick={handlDelete}>Xác nhận</button>
            <button className={styles.btn_delete} onClick={handleClose}>Hủy bỏ</button>
          </div>
        </div>
      </div>
    </div>
  );
}
