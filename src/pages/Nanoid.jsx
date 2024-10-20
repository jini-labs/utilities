import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid'

const Nanoid = () => {
  const MAX_GEN_COUNT = 20;
  const [sampleId, setSampleId] = useState();
  const [generateCount, setGenerateCount] = useState();
  const [generatedIds, setGeneratedIds] = useState([]);

  useEffect(() => {
    setSampleId((prev) => nanoid());
  }, [])

  const handleGenerateCount = (e) => {
    const value = Math.max(1, Math.min(MAX_GEN_COUNT, e.target.value));
    setGenerateCount(() => value);
  }
  const handleGenerateId = () => {
    let newIds = [];
    if (!generateCount || generateCount <= 0) {
      newIds.push(nanoid())
    } else {
      for (let i = 0; i < generateCount; i++) {
        newIds.push(nanoid());
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
        <h2> NONO ID </h2>
      </div>
      <div className='uuid__description'>
        短くて衝突率が低く、かつ URL フレンドリーな ID を生成するライブラリです。ID の長さや文字セットをカスタマイズできる柔軟性があり、ランダムな ID 生成に向いています。
      </div>
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

export default Nanoid
