import React, { ChangeEvent, FormEvent, useState } from 'react';
import { message } from 'antd';
import { axiosInstance } from '../../common/request';
import { IFormSchema } from '../../common/types/schema';
import { getParams } from '../../common/request/getParams';

interface IFormProps {
  schema: IFormSchema;
}

const Form: React.FC<IFormProps> = ({ schema }) => {
  const { children = [] } = schema;
  const [content, setContent] = useState<{ [x: string]: string }>({});

  const sendContent = (e: FormEvent) => {
    e.preventDefault();
    axiosInstance
      .post('/sendContent', { ...content, id: getParams().id })
      .then((res) => {
        const data = res.data;
        if (data && data.code === 200) {
          message.success(data.message);
        } else {
          message.warning(data.message);
        }
      })
      .catch(() => {
        message.error('网络错误');
      })
      .finally(() => {
        setContent({});
      });
  };

  const changeContent = (
    name: string,
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const newContent = { ...content };
    newContent[name] = e.target.value;
    setContent(newContent);
  };

  return (
    <section>
      <h3 className="text-4xl font-bold text-center mb-4">联系我们</h3>
      <form
        className="max-w-2xl rounded-md shadow-normal p-8
        flex flex-col mx-auto mt-4"
        onSubmit={sendContent}
      >
        {children.map(({ attributes: { name, rows } }, index) =>
          rows === '1' ? (
            <div className="flex flex-col" key={index}>
              <label htmlFor={name} className="text-[#111] mt-4 text-base">
                {name}
              </label>
              <input
                type="text"
                placeholder={`请输入您的${name}`}
                className="px-3 py-3 text-[#444] text-base
                mt-2 shadow-normal rounded-md bg-transparent
                outline-none focus:shadow-hover"
                value={content[name] || ''}
                onChange={(e) => changeContent(name, e)}
                id={name}
              />
            </div>
          ) : (
            <div className="flex flex-col" key={index}>
              <label htmlFor={name} className="text-[#111] mt-4 text-base">
                {name}
              </label>
              <textarea
                placeholder={`请输入您的${name}`}
                rows={parseInt(rows)}
                className="px-3 py-4 text-[#444] text-base
                mt-2 shadow-normal rounded-lg resize-none h-40
                bg-transparent outline-none focus:shadow-hover"
                value={content[name] || ''}
                onChange={(e) => changeContent(name, e)}
                id={name}
              />
            </div>
          ),
        )}
        <button
          type="submit"
          className="text-base shadow-normal py-2 transition
          rounded-[5px] hover:shadow-hover max-w-[160px] mt-4
          cursor-pointer hover:text-[#27ae60] ml-auto min-w-[100px]"
        >
          发送
        </button>
      </form>
    </section>
  );
};
export default Form;
