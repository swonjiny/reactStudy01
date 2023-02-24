import React from "react"

function Home(){
    return (
        <div align="center">
            <h1>이미지 삽에 오신것을 환영합니다.</h1>
            <p>{new Date().toString()}</p>
        </div>
    )
}
export default Home