import { Alert, Button, Input, Spin } from 'antd';
import { ChangeEvent, memo, useRef, useState } from 'react';
import { MdOutlineDriveFolderUpload } from 'react-icons/md';
import inspireConfig from '../../../common/request/service';
import commonStyles from '../common.module.scss';
import styles from './style.module.scss';

interface IHeroProps {
  attributes: {
    title: string;
    description: string;
    link: string;
  };
  changeAttributes: ({
    title,
    description,
    link,
  }: {
    title?: string;
    description?: string;
    link?: string;
  }) => void;
}

const Hero: React.FC<IHeroProps> = ({ attributes, changeAttributes }) => {
  const { title = '', description = '', link = '' } = attributes;

  const [loading, setLoading] = useState(false);
  const filePickerRef = useRef<HTMLInputElement>(null);
  const { inspireCloud, fileUploadToken } = inspireConfig;
  const [selectedFile, setSelectedFile] = useState('');

  const setLink = async () => {
    if (loading) return;
    setLoading(true);

    if (
      filePickerRef.current?.files &&
      filePickerRef.current?.files?.length > 0
    ) {
      const file = filePickerRef.current.files[0];

      await inspireCloud.file
        .upload(file.name, file, { token: fileUploadToken })
        .then((data) => {
          // console.log(data);
          changeAttributes({ link: data.url });
          console.log('link', link);
        })
        .catch(() => {})
        .finally(() => {
          setLoading(false);
        });
    }
  };

  const selectFile = (e: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    if (e.target?.files?.[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      if (typeof readerEvent.target?.result === 'string') {
        setSelectedFile(readerEvent.target?.result);
      }
    };
  };

  return (
    <div className={commonStyles.wrapper}>
      {loading ? (
        <Spin tip="文件上传中，请勿关闭页面">
          <Alert type="info" style={{ marginTop: 20, minHeight: '100px' }} />
        </Spin>
      ) : (
        <>
          <div className={styles.row}>
            <span className={styles.label}>标题</span>
            <Input
              className={styles.content}
              placeholder="请输入页面标题"
              value={title}
              onChange={(e) => changeAttributes({ title: e.target.value })}
            />
          </div>
          <div className={styles.row}>
            <span className={styles.label}>简介</span>
            <Input
              className={styles.content}
              placeholder="请输入页面简介"
              value={description}
              onChange={(e) =>
                changeAttributes({ description: e.target.value })
              }
            />
          </div>
          <div className={styles.row}>
            <span className={styles.label}>头像</span>
            <div
              onClick={() => filePickerRef.current?.click()}
              className={styles.upload}
              title="选择头像"
            >
              <MdOutlineDriveFolderUpload />
              <input
                type="file"
                onChange={selectFile}
                hidden
                ref={filePickerRef}
                accept="image/*"
              />
            </div>
            {selectedFile ? (
              <img className={styles.uploadImage} src={selectedFile} alt="" />
            ) : link ? (
              <img className={styles.uploadImage} src={link} alt="" />
            ) : null}
            <Button
              disabled={!selectedFile}
              onClick={setLink}
              type="default"
              className={styles.uploadButton}
            >
              上传头像
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default memo(Hero);
