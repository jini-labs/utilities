import React, { useState, useEffect } from 'react';
import cuid from 'cuid';

const Uuidv1 = () => {
  const MAX_GEN_COUNT = 20;
  const [sampleId, setSampleId] = useState();
  const [generateCount, setGenerateCount] = useState();
  const [generatedIds, setGeneratedIds] = useState([]);

  useEffect(() => {
    setSampleId((prev) => cuid());
  }, [])

  const handleGenerateCount = (e) => {
    const value = Math.max(1, Math.min(MAX_GEN_COUNT, e.target.value));
    setGenerateCount(() => value);
  }
  const handleGenerateId = () => {
    let newIds = [];
    if (!generateCount || generateCount <= 0) {
      newIds.push(cuid())
    } else {
      for (let i = 0; i < generateCount; i++) {
        newIds.push(cuid());
      }
    }
    setGeneratedIds(() => newIds);
  }
  const handleCopyToClipboard = (ids) => {
    if (ids.length) {
      navigator.clipboard.writeText(ids.join(' '));
    }
  }
  return (
    <div className='uuid__inner'>
      <div className='uuid__title'>
        <h2> CUID </h2>
      </div>
      <div className='uuid__description'>
        衝突の少ない一意の ID を生成するために設計されており、短く URL フレンドリーな文字列で、データベースのキーとしても適しています。cuidライブラリを使って生成できます。      </div>
      <div className='uuid__sample'>
        <h3 className='uuid__sample_title'>サンプル</h3>
        <h3 className='uuid__sample_id'>
          {sampleId}
          <span className='uuid__id_copy' onClick={() => handleCopyToClipboard([sampleId])}>コピー</span>
        </h3>
      </div>
      <div className='uuid__create'>
        <label>
          <input
            className='uuid_create_input_count'
            type='number' 
            onChange={handleGenerateCount}
            value={generateCount}
            placeholder='Max 20'
            min='1'
            max='20'
          /> 件
        </label>
        <button onClick={handleGenerateId}>生成</button>
      </div>
      <div className='uuid__created_ids'>
        <p>
          {generatedIds.length > 0 &&
            <>
              {generatedIds.map((item) => (
                <p className='uuid__created_id'> {item} </p>
              ))}
            </>
          }
        </p>
      </div>
    </div>
  )
}

export default Uuidv1