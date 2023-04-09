import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.nav`
  border-right: 1px solid var(--border-color);
  width: 260px;
  height: 100%;
  padding: 0.4rem;
`

export const ItemContainer = styled(Link)`
  word-break: break-all;
  font-size: 1.6rem;
  padding: 1.2rem;
  text-decoration: none;
  border-radius: 4px;
  margin: 0.2rem 0;
  color: var(--text-color);

  &:hover {
    color: var(--text-color);
    background-color: rgba(0, 0, 0, 0.06);
    transition: background-color 0.3s,
      padding 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  &.active {
    background-color: #e6f4ff;
    color: var(--primary-color-active);
  }
`
