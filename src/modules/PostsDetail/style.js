import styled from 'styled-components'

const Body = styled.div`
  font-size: 14px;
  overflow-wrap: break-word;
  margin: 10px 0px;
`
const Creator = styled.div`
  font-size: 10px;
`
const Comment = styled.div`
    box-shadow: 0 0 6px #b3b3b3;
    border-radius: 4px;
    font-size: 10px;
    margin: 10px 0px;
    padding: 5px;
    max-width: 550px;
  & > div:first-of-type {
    font-size: 12px;
  }
`
const Container = styled.div`
  display: block;
  max-width: 1024px;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
`
const Title = styled.div`
  font-size: 28px;
`

export {
  Body,
  Creator,
  Comment,
  Container,
  Title,
}
