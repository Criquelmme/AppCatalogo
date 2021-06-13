{**
 * 2007-2019 PrestaShop and Contributors
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2019 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 * International Registered Trademark & Property of PrestaShop SA
 *}
{extends file='layouts/layout-both-columns.tpl'}

{block name='left_column'}{/block}
{block name='right_column'}{/block}

{block name='content_wrapper'}
{if $urls.current_url == 'https://mundopack.cl/index.php'}

<div class="nav">
  <input type="checkbox" id="nav-check">
  <div class="nav-header">
 
  </div>
  <div class="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  <div class="nav-links">
    <a href="https://mundopack.cl/index.php?id_category=15&controller=category" >Productos</a>
    <a href="https://mundopack.cl/index.php?id_cms=4&controller=cms" >Quiénes somos</a>
    <a href="https://mundopack.cl/index.php?id_cms=7&controller=cms" >Metodos de pago</a>
    <a href="https://mundopack.cl/index.php?id_cms=1&controller=cms" >Despachos</a>
    <a href="Cotizar.mundopack.cl" target="_blank">Cotizaciones</a>
  </div>
</div>

 {else}

<div class=" nav nav2">
  <input type="checkbox" id="nav-check">
  <div class="nav-header">
 
  </div>
  <div class="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  <div class="nav-links">
    <a href="https://mundopack.cl/index.php?id_category=15&controller=category" >Productos</a>
    <a href="https://mundopack.cl/index.php?id_cms=4&controller=cms" >Quiénes somos</a>
    <a href="https://mundopack.cl/index.php?id_cms=7&controller=cms" >Metodos de pago</a>
    <a href="https://mundopack.cl/index.php?id_cms=1&controller=cms" >Despachos</a>
    <a href="Cotizar.mundopack.cl" target="_blank">Cotizaciones</a>
  </div>
</div>

 {/if}
  <div id="content-wrapper">
    {hook h="displayContentWrapperTop"}
    {block name='content'}
      <p>Hello world! This is HTML5 Boilerplate.</p>
    {/block}
    {hook h="displayContentWrapperBottom"}
  </div>
{/block}
